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
exports.UserRolesController = void 0;
const common_1 = require("@nestjs/common");
const user_roles_service_1 = require("./user_roles.service");
const create_user_role_dto_1 = require("./dto/create-user_role.dto");
let UserRolesController = class UserRolesController {
    constructor(userRolesService) {
        this.userRolesService = userRolesService;
    }
    create(createUserRoleDto) {
        return this.userRolesService.create(createUserRoleDto);
    }
    findAll() {
        return this.userRolesService.findAll();
    }
};
exports.UserRolesController = UserRolesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_role_dto_1.CreateUserRoleDto]),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "findAll", null);
exports.UserRolesController = UserRolesController = __decorate([
    (0, common_1.Controller)('user-roles'),
    __metadata("design:paramtypes", [user_roles_service_1.UserRolesService])
], UserRolesController);
//# sourceMappingURL=user_roles.controller.js.map