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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const jwt_access_token_guards_1 = require("../auth/guards/jwt_access_token.guards");
const auth_decorators_1 = require("../../decorators/auth.decorators");
const role_decorators_1 = require("../../decorators/role.decorators");
const user_role_entity_1 = require("../user_roles/entities/user_role.entity");
const role_guards_1 = require("../auth/guards/role.guards");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    findAll() {
        return this.booksService.findAll();
    }
    findOne(id) {
        return this.booksService.findOne(id);
    }
    update(id, updateUserDto) {
        console.log(updateUserDto);
        return this.booksService.update(id, updateUserDto);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorators_1.Roles)(user_role_entity_1.USER_ROLE.ADMIN),
    (0, common_1.UseGuards)(role_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_access_token_guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorators_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, auth_decorators_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, role_decorators_1.Roles)(user_role_entity_1.USER_ROLE.ADMIN),
    (0, common_1.UseGuards)(role_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_access_token_guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "update", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    (0, common_1.UseGuards)(jwt_access_token_guards_1.JwtAccessTokenGuard),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map