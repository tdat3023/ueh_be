import { User, UserDocument } from '@modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, PopulateOptions } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { FindAllResponse } from 'src/types/common.type';
import { UserRole } from '@modules/user_roles/entities/user_role.entity';
import { UsersRepositoryInterface } from '@modules/users/interfaces/user.interface';

@Injectable()
export class UsersRepository
	extends BaseRepositoryAbstract<UserDocument>
	implements UsersRepositoryInterface
{
	constructor(
		@InjectModel(User.name)
		private readonly user_model: Model<UserDocument>,
	) {
		super(user_model);
	}
	
	async getUserByEmailWithRole(email: string): Promise<User> {
		return await this.user_model
			.findOne({
				email: email,
				deletedAt: null,
			})
			.populate([{ path: 'role' }]);
	}

	async findAllWithSubFields(
		condition: FilterQuery<UserDocument>,
		options: {
			projection?: string;
			populate?: string[] | PopulateOptions | PopulateOptions[];
			offset?: number;
			limit?: number;
		},
	): Promise<FindAllResponse<UserDocument>> {
		const [count, items] = await Promise.all([
			this.user_model.countDocuments({ ...condition, deleted_at: null }),
			this.user_model
				.find({ ...condition, deleted_at: null }, options?.projection || '', {
					skip: options.offset || 0,
					limit: options.limit || 10,
				})
				.populate(options.populate),
		]);
		return {
			count,
			items,
		};
	}

	async getUserWithRole(user_id: string): Promise<User> {
		return await this.user_model
			.findById(user_id, '-password')
			.populate([{ path: 'role', transform: (role: UserRole) => role?.name }]);
	}
}
