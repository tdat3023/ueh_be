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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleSchema = exports.UserRole = exports.USER_ROLE = void 0;
const base_entity_1 = require("../../shared/base/base.entity");
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["ADMIN"] = "Admin";
    USER_ROLE["USER"] = "User";
})(USER_ROLE || (exports.USER_ROLE = USER_ROLE = {}));
let UserRole = class UserRole extends base_entity_1.BaseEntity {
};
exports.UserRole = UserRole;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        default: USER_ROLE.USER,
        enum: USER_ROLE,
        required: true,
    }),
    (0, class_transformer_1.Expose)({ name: 'role', toPlainOnly: true }),
    __metadata("design:type", String)
], UserRole.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRole.prototype, "_description", void 0);
exports.UserRole = UserRole = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'user-roles',
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    }),
    (0, class_transformer_1.Exclude)()
], UserRole);
exports.UserRoleSchema = mongoose_1.SchemaFactory.createForClass(UserRole);
//# sourceMappingURL=user_role.entity.js.map