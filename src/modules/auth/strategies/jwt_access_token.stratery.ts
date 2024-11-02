import { UsersService } from '@modules/users/users.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token.interface';
import { access_token_public_key } from 'src/constraints/jwt.constraints';

@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly users_service: UsersService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: access_token_public_key,
		});
	}

    async validate(payload: TokenPayload) {
		return await this.users_service.getUserWithRole(payload.user_id);
	}
}
