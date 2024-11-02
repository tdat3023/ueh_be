import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { TokenPayload } from '../interfaces/token.interface';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private readonly auth_service;
    constructor(auth_service: AuthService);
    validate(request: Request, payload: TokenPayload): Promise<import("../../users/entities/user.entity").User>;
}
export {};
