import { BaseEntity } from '@modules/shared/base/base.entity';
import { HydratedDocument } from 'mongoose';
export type UserRoleDocument = HydratedDocument<UserRole>;
export declare enum USER_ROLE {
    ADMIN = "Admin",
    USER = "User"
}
export declare class UserRole extends BaseEntity {
    name: string;
    _description: string;
}
export declare const UserRoleSchema: import("mongoose").Schema<UserRole, import("mongoose").Model<UserRole, any, any, any, import("mongoose").Document<unknown, any, UserRole> & UserRole & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserRole, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserRole>> & import("mongoose").FlatRecord<UserRole> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
