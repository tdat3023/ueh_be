import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { UserRoleDocument } from '@modules/user_roles/entities/user_role.entity';
import { UserRolesRepositoryInterface } from '@modules/user_roles/interfaces/user_roles.interface';
export declare class UserRolesRepository extends BaseRepositoryAbstract<UserRoleDocument> implements UserRolesRepositoryInterface {
    private readonly user_role_model;
    constructor(user_role_model: Model<UserRoleDocument>);
}
