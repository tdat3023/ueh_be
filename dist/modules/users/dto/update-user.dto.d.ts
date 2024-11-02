import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Omit<CreateUserDto, "email" | "password">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    phoneNumber?: string;
    gender?: string;
}
export {};
