import { BaseEntity } from '@modules/shared/base/base.entity';
import * as mongoose from 'mongoose';
export type BookDocument = mongoose.HydratedDocument<Book>;
export declare class Book extends BaseEntity {
    ISBN: string;
    image: string;
    title: string;
    authName: string;
    type: string;
    language: string;
    quanlity: number;
    status: boolean;
}
export declare const BookSchema: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, mongoose.Document<unknown, any, Book> & Book & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book, mongoose.Document<unknown, {}, mongoose.FlatRecord<Book>> & mongoose.FlatRecord<Book> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
