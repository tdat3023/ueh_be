import { UserRolesService } from './user_roles.service';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
export declare class UserRolesController {
    private readonly userRolesService;
    constructor(userRolesService: UserRolesService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<import("./entities/user_role.entity").UserRole>;
    findAll(): Promise<import("../../types/common.type").FindAllResponse<import("./entities/user_role.entity").UserRole>>;
}
