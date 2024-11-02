import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { UserRole } from './entities/user_role.entity';
import { UserRolesRepositoryInterface } from './interfaces/user_roles.interface';
export declare class UserRolesService extends BaseServiceAbstract<UserRole> {
    private readonly user_roles_repository;
    constructor(user_roles_repository: UserRolesRepositoryInterface);
}
