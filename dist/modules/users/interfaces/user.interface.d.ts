import { User } from '@modules/users/entities/user.entity';
import { BaseRepositoryInterface } from '@repositories/base/base.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
export interface UsersRepositoryInterface extends BaseRepositoryInterface<User> {
    findAllWithSubFields(condition: object, options: {
        projection?: string;
        populate?: string[] | any;
        offset?: number;
        limit?: number;
    }): Promise<FindAllResponse<User>>;
    getUserWithRole(userId: string): Promise<User>;
    getUserByEmailWithRole(email: string): Promise<User>;
}
