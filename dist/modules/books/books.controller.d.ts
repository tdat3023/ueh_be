import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findAll(): Promise<import("../../types/common.type").FindAllResponse<import("./entities/book.entity").Book>>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateUserDto: UpdateBookDto): Promise<import("./entities/book.entity").Book>;
}
