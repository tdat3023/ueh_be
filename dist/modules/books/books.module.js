"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModule = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const books_controller_1 = require("./books.controller");
const mongoose_1 = require("@nestjs/mongoose");
const book_entity_1 = require("./entities/book.entity");
const book_repository_1 = require("../../repositories/book.repository");
let BooksModule = class BooksModule {
};
exports.BooksModule = BooksModule;
exports.BooksModule = BooksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: book_entity_1.Book.name, schema: book_entity_1.BookSchema }]),
        ],
        controllers: [books_controller_1.BooksController],
        providers: [books_service_1.BooksService, { provide: 'BooksRepositoryInterface', useClass: book_repository_1.BookRepository },],
    })
], BooksModule);
//# sourceMappingURL=books.module.js.map