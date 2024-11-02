import { User, UserDocument } from '@modules/users/entities/user.entity';
import { FilterQuery, Model, PopulateOptions } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { FindAllResponse } from 'src/types/common.type';
import { UsersRepositoryInterface } from '@modules/users/interfaces/user.interface';
export declare class UsersRepository extends BaseRepositoryAbstract<UserDocument> implements UsersRepositoryInterface {
    private readonly user_model;
    constructor(user_model: Model<UserDocument>);
    getUserByEmailWithRole(email: string): Promise<User>;
    findAllWithSubFields(condition: FilterQuery<UserDocument>, options: {
        projection?: string;
        populate?: string[] | PopulateOptions | PopulateOptions[];
        offset?: number;
        limit?: number;
    }): Promise<FindAllResponse<UserDocument>>;
    getUserWithRole(user_id: string): Promise<User>;
}
