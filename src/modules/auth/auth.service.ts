import * as bcrypt from 'bcryptjs';
import { UsersService } from '@modules/users/users.service';
import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign_up.dto';
import { User } from '@modules/users/entities/user.entity';
import { TokenPayload } from './interfaces/token.interface';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { access_token_private_key, refresh_token_private_key } from 'src/constraints/jwt.constraints';

@Injectable()
export class AuthService {
    private SALT_ROUND = 11;
    constructor(
        private config_service: ConfigService,
        private readonly users_service: UsersService,
        private readonly jwt_service: JwtService,
    ) { }

    async signUp(sign_up_dto: SignUpDto) {
        try {
            const existed_user = await this.users_service.findOneByCondition({
                email: sign_up_dto.email,
            });
            if (existed_user) {
                throw new ConflictException('Email already existed!!');
            }
            // const hashed_password = await bcrypt.hash(
            //     sign_up_dto.password,
            //     this.SALT_ROUND,
            // );
            const user = await this.users_service.create({
                ...sign_up_dto,
                // password: hashed_password,
                phoneNumber: '',
                classRoom: ''
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(user_id: string, role: string) {
        try {
            const accessToken = this.generateAccessToken({
                user_id,
            });
            const refreshToken = this.generateRefreshToken({
                user_id,
            });
            await this.storeRefreshToken(user_id, refreshToken);
            return {
                role,
                accessToken,
                refreshToken,
            };
        } catch (error) {
            throw error;
        }
    }

    async getAuthenticatedUser(email: string, password: string): Promise<User> {
        try {
            const user = await this.users_service.getUserByEmailWithRole(email);
            await this.verifyPlainContentWithHashedContent(password, user.password);
            return user;
        } catch (error) {
            throw new BadRequestException('Wrong credentials!!');
        }
    }

    private async verifyPlainContentWithHashedContent(
        plain_text: string,
        hashed_text: string,
    ) {
        const is_matching = await bcrypt.compare(plain_text, hashed_text);
        if (!is_matching) {
            throw new BadRequestException();
        }
    }

    generateRefreshToken(payload: TokenPayload) {
        return this.jwt_service.sign(payload, {
            algorithm: 'RS256',
            privateKey: refresh_token_private_key,
            expiresIn: `${this.config_service.get<string>(
                'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
            )}s`,
        });
    }

    async storeRefreshToken(user_id: string, token: string): Promise<void> {
        try {
            const hashed_token = await bcrypt.hash(token, this.SALT_ROUND);
            await this.users_service.setCurrentRefreshToken(user_id, hashed_token);
        } catch (error) {
            throw error;
        }
    }

    generateAccessToken(payload: TokenPayload) {
        return this.jwt_service.sign(payload, {
            algorithm: 'RS256',
            privateKey: access_token_private_key,
            expiresIn: `${this.config_service.get<string>(
                'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
            )}s`,
        });
    }

    async getUserIfRefreshTokenMatched(
		user_id: string,
		refresh_token: string,
	): Promise<User> {
		try {
			const user = await this.users_service.findOneByCondition({
				id: user_id,
			});
			if (!user) {
				throw new UnauthorizedException();
			}
			await this.verifyPlainContentWithHashedContent(
				refresh_token,
				user.currentRefreshToken,
			);
			return user;
		} catch (error) {
			throw error;
		}
	}
}
