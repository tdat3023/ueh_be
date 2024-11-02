"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesModule = void 0;
const common_1 = require("@nestjs/common");
const user_roles_service_1 = require("./user_roles.service");
const user_roles_controller_1 = require("./user_roles.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_role_entity_1 = require("./entities/user_role.entity");
const user_roles_reponsitory_1 = require("../../repositories/user_roles.reponsitory");
let UserRolesModule = class UserRolesModule {
};
exports.UserRolesModule = UserRolesModule;
exports.UserRolesModule = UserRolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_role_entity_1.UserRole.name, schema: user_role_entity_1.UserRoleSchema }]),
        ],
        controllers: [user_roles_controller_1.UserRolesController],
        providers: [
            user_roles_service_1.UserRolesService,
            {
                provide: 'UserRolesRepositoryInterface',
                useClass: user_roles_reponsitory_1.UserRolesRepository,
            },
        ],
        exports: [user_roles_service_1.UserRolesService],
    })
], UserRolesModule);
//# sourceMappingURL=user_roles.module.js.map