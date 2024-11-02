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
exports.UsersRepository = void 0;
const user_entity_1 = require("../modules/users/entities/user.entity");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_abstract_repository_1 = require("./base/base.abstract.repository");
let UsersRepository = class UsersRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(user_model) {
        super(user_model);
        this.user_model = user_model;
    }
    async getUserByEmailWithRole(email) {
        return await this.user_model
            .findOne({
            email: email,
            deletedAt: null,
        })
            .populate([{ path: 'role' }]);
    }
    async findAllWithSubFields(condition, options) {
        const [count, items] = await Promise.all([
            this.user_model.countDocuments({ ...condition, deleted_at: null }),
            this.user_model
                .find({ ...condition, deleted_at: null }, options?.projection || '', {
                skip: options.offset || 0,
                limit: options.limit || 10,
            })
                .populate(options.populate),
        ]);
        return {
            count,
            items,
        };
    }
    async getUserWithRole(user_id) {
        return await this.user_model
            .findById(user_id, '-password')
            .populate([{ path: 'role', transform: (role) => role?.name }]);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersRepository);
//# sourceMappingURL=user.repository.js.map