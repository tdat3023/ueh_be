import { UsersService } from '@modules/users/users.service';
import { Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token.interface';
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private readonly users_service;
    constructor(users_service: UsersService);
    validate(payload: TokenPayload): Promise<import("../../users/entities/user.entity").User>;
}
export {};
