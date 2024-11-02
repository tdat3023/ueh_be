"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = require("bcryptjs");
const users_service_1 = require("../users/users.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_constraints_1 = require("../../constraints/jwt.constraints");
let AuthService = class AuthService {
    constructor(config_service, users_service, jwt_service) {
        this.config_service = config_service;
        this.users_service = users_service;
        this.jwt_service = jwt_service;
        this.SALT_ROUND = 11;
    }
    async signUp(sign_up_dto) {
        try {
            const existed_user = await this.users_service.findOneByCondition({
                email: sign_up_dto.email,
            });
            if (existed_user) {
                throw new common_1.ConflictException('Email already existed!!');
            }
            const user = await this.users_service.create({
                ...sign_up_dto,
                phoneNumber: '',
                classRoom: ''
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async signIn(user_id, role) {
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
        }
        catch (error) {
            throw error;
        }
    }
    async getAuthenticatedUser(email, password) {
        try {
            const user = await this.users_service.getUserByEmailWithRole(email);
            await this.verifyPlainContentWithHashedContent(password, user.password);
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException('Wrong credentials!!');
        }
    }
    async verifyPlainContentWithHashedContent(plain_text, hashed_text) {
        const is_matching = await bcrypt.compare(plain_text, hashed_text);
        if (!is_matching) {
            throw new common_1.BadRequestException();
        }
    }
    generateRefreshToken(payload) {
        return this.jwt_service.sign(payload, {
            algorithm: 'RS256',
            privateKey: jwt_constraints_1.refresh_token_private_key,
            expiresIn: `${this.config_service.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
        });
    }
    async storeRefreshToken(user_id, token) {
        try {
            const hashed_token = await bcrypt.hash(token, this.SALT_ROUND);
            await this.users_service.setCurrentRefreshToken(user_id, hashed_token);
        }
        catch (error) {
            throw error;
        }
    }
    generateAccessToken(payload) {
        return this.jwt_service.sign(payload, {
            algorithm: 'RS256',
            privateKey: jwt_constraints_1.access_token_private_key,
            expiresIn: `${this.config_service.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`,
        });
    }
    async getUserIfRefreshTokenMatched(user_id, refresh_token) {
        try {
            const user = await this.users_service.findOneByCondition({
                id: user_id,
            });
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            await this.verifyPlainContentWithHashedContent(refresh_token, user.currentRefreshToken);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map