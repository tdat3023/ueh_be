import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { BooksRepositoryInterface } from '@modules/books/interfaces/book.interface';
import { BookDocument } from '@modules/books/entities/book.entity';
export declare class BookRepository extends BaseRepositoryAbstract<BookDocument> implements BooksRepositoryInterface {
    private readonly book_model;
    constructor(book_model: Model<BookDocument>);
}
