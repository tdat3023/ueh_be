import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { BooksRepositoryInterface } from './interfaces/book.interface';
export declare class BooksService extends BaseServiceAbstract<Book> {
    private readonly booksRepository;
    constructor(booksRepository: BooksRepositoryInterface);
    create(create_dto: CreateBookDto): Promise<Book>;
}
