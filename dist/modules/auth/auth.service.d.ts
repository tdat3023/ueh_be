import { UsersService } from '@modules/users/users.service';
import { SignUpDto } from './dto/sign_up.dto';
import { User } from '@modules/users/entities/user.entity';
import { TokenPayload } from './interfaces/token.interface';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private config_service;
    private readonly users_service;
    private readonly jwt_service;
    private SALT_ROUND;
    constructor(config_service: ConfigService, users_service: UsersService, jwt_service: JwtService);
    signUp(sign_up_dto: SignUpDto): Promise<User>;
    signIn(user_id: string, role: string): Promise<{
        role: string;
        accessToken: string;
        refreshToken: string;
    }>;
    getAuthenticatedUser(email: string, password: string): Promise<User>;
    private verifyPlainContentWithHashedContent;
    generateRefreshToken(payload: TokenPayload): string;
    storeRefreshToken(user_id: string, token: string): Promise<void>;
    generateAccessToken(payload: TokenPayload): string;
    getUserIfRefreshTokenMatched(user_id: string, refresh_token: string): Promise<User>;
}
