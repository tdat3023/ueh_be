import {
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRolesService } from '@modules/user_roles/user_roles.service';
import { UsersRepositoryInterface } from './interfaces/user.interface';
import { USER_ROLE } from '@modules/user_roles/entities/user_role.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService extends BaseServiceAbstract<User> {
	private SALT_ROUND = 11;
	constructor(
		@Inject('UsersRepositoryInterface')
		private readonly usersRepository: UsersRepositoryInterface,
		private readonly userRolesService: UserRolesService,
	) {
		super(usersRepository);
	}

	async create(create_dto: CreateUserDto): Promise<User> {
		let userRole = await this.userRolesService.findOneByCondition({
			name: USER_ROLE.USER,
		});
		if (!userRole) {
			userRole = await this.userRolesService.create({
				name: USER_ROLE.USER,
			});
		}

		const existed_user = await this.usersRepository.findOneByCondition({
			email: create_dto.email,
		});
        
		if (existed_user) {
			throw new ConflictException('Email already existed!!');
		}
		const hashed_password = await bcrypt.hash(
			create_dto.password,
			this.SALT_ROUND,
		);

		const user = await this.usersRepository.create({
			...create_dto,
			role: userRole,
            password: hashed_password,
		});
		return user;
	}

	async getUserByEmail(email: string): Promise<User> {
		try {
			const user = await this.usersRepository.findOneByCondition({ email });
			if (!user) {
				throw new NotFoundException();
			}
			return user;
		} catch (error) {
			throw error;
		}
	}

	async getUserByEmailWithRole(email: string): Promise<User> {
		try {
			const user = await this.usersRepository.getUserByEmailWithRole(email);
			if (!user) {
				throw new NotFoundException();
			}
			return user;
		} catch (error) {
			throw error;
		}
	}

	async getUserWithRole(user_id: string): Promise<User> {
		try {
			return await this.usersRepository.getUserWithRole(user_id);
		} catch (error) {
			throw error;
		}
	}

	async setCurrentRefreshToken(
		id: string,
		hashed_token: string,
	): Promise<void> {
		try {
			await this.usersRepository.update(id, {
				currentRefreshToken: hashed_token,
			});
		} catch (error) {
			throw error;
		}
	}
}
