import { BaseEntity } from '@modules/shared/base/base.entity';
import { BaseRepositoryInterface } from '@repositories/base/base.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
import { BaseServiceInterface } from './base.interface.service';
export declare abstract class BaseServiceAbstract<T extends BaseEntity> implements BaseServiceInterface<T> {
    private readonly repository;
    constructor(repository: BaseRepositoryInterface<T>);
    create(create_dto: T | any): Promise<T>;
    findAll(filter?: object, options?: object): Promise<FindAllResponse<T>>;
    findOne(id: string): Promise<T>;
    findOneByCondition(filter: Partial<T>): Promise<T>;
    update(id: string, update_dto: Partial<T>): Promise<T>;
    remove(id: string): Promise<boolean>;
}
