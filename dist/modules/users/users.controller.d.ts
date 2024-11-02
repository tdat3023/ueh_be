import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RequestWithUser } from 'src/types/request.type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(request: RequestWithUser): Promise<import("./entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("../../types/common.type").FindAllResponse<import("./entities/user.entity").User>>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
}
