import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign_up.dto';
import { RequestWithUser } from 'src/types/request.type';
export declare class AuthController {
    private readonly auth_service;
    constructor(auth_service: AuthService);
    signUp(sign_up_dto: SignUpDto): Promise<import("../users/entities/user.entity").User>;
    signIn(request: RequestWithUser): Promise<{
        role: string;
        accessToken: string;
        refreshToken: string;
    }>;
    refreshAccessToken(request: RequestWithUser): Promise<{
        access_token: string;
    }>;
}
