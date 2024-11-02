"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseServiceAbstract = void 0;
class BaseServiceAbstract {
    constructor(repository) {
        this.repository = repository;
    }
    async create(create_dto) {
        return await this.repository.create(create_dto);
    }
    async findAll(filter, options) {
        return await this.repository.findAll(filter, options);
    }
    async findOne(id) {
        return await this.repository.findOneById(id);
    }
    async findOneByCondition(filter) {
        return await this.repository.findOneByCondition(filter);
    }
    async update(id, update_dto) {
        return await this.repository.update(id, update_dto);
    }
    async remove(id) {
        return await this.repository.softDelete(id);
    }
}
exports.BaseServiceAbstract = BaseServiceAbstract;
//# sourceMappingURL=base.abstract.service.js.map