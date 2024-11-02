import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRolesService } from '@modules/user_roles/user_roles.service';
import { UsersRepositoryInterface } from './interfaces/user.interface';
export declare class UsersService extends BaseServiceAbstract<User> {
    private readonly usersRepository;
    private readonly userRolesService;
    private SALT_ROUND;
    constructor(usersRepository: UsersRepositoryInterface, userRolesService: UserRolesService);
    create(create_dto: CreateUserDto): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByEmailWithRole(email: string): Promise<User>;
    getUserWithRole(user_id: string): Promise<User>;
    setCurrentRefreshToken(id: string, hashed_token: string): Promise<void>;
}
