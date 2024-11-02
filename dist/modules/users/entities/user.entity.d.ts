import { BaseEntity } from '@modules/shared/base/base.entity';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserRole } from '@modules/user_roles/entities/user_role.entity';
export type UserDocument = HydratedDocument<User>;
export declare enum GENDER {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other"
}
export declare class User extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    avatar: string;
    gender: GENDER;
    role: UserRole;
    classRoom: string;
    currentRefreshToken: string;
    active: boolean;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
