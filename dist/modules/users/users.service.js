"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const base_abstract_service_1 = require("../../services/base/base.abstract.service");
const user_roles_service_1 = require("../user_roles/user_roles.service");
const user_role_entity_1 = require("../user_roles/entities/user_role.entity");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService extends base_abstract_service_1.BaseServiceAbstract {
    constructor(usersRepository, userRolesService) {
        super(usersRepository);
        this.usersRepository = usersRepository;
        this.userRolesService = userRolesService;
        this.SALT_ROUND = 11;
    }
    async create(create_dto) {
        let userRole = await this.userRolesService.findOneByCondition({
            name: user_role_entity_1.USER_ROLE.USER,
        });
        if (!userRole) {
            userRole = await this.userRolesService.create({
                name: user_role_entity_1.USER_ROLE.USER,
            });
        }
        const existed_user = await this.usersRepository.findOneByCondition({
            email: create_dto.email,
        });
        if (existed_user) {
            throw new common_1.ConflictException('Email already existed!!');
        }
        const hashed_password = await bcrypt.hash(create_dto.password, this.SALT_ROUND);
        const user = await this.usersRepository.create({
            ...create_dto,
            role: userRole,
            password: hashed_password,
        });
        return user;
    }
    async getUserByEmail(email) {
        try {
            const user = await this.usersRepository.findOneByCondition({ email });
            if (!user) {
                throw new common_1.NotFoundException();
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async getUserByEmailWithRole(email) {
        try {
            const user = await this.usersRepository.getUserByEmailWithRole(email);
            if (!user) {
                throw new common_1.NotFoundException();
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async getUserWithRole(user_id) {
        try {
            return await this.usersRepository.getUserWithRole(user_id);
        }
        catch (error) {
            throw error;
        }
    }
    async setCurrentRefreshToken(id, hashed_token) {
        try {
            await this.usersRepository.update(id, {
                currentRefreshToken: hashed_token,
            });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UsersRepositoryInterface')),
    __metadata("design:paramtypes", [Object, user_roles_service_1.UserRolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map