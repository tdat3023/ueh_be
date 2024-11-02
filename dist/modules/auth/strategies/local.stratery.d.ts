import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly auth_service;
    constructor(auth_service: AuthService);
    validate(email: string, password: string): Promise<import("../../users/entities/user.entity").User>;
}
export {};
