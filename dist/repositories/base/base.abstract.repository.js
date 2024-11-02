"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepositoryAbstract = void 0;
class BaseRepositoryAbstract {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async create(dto) {
        const created_data = await this.model.create(dto);
        return created_data.save();
    }
    async findOneById(id, projection, options) {
        const item = await this.model.findById(id, projection, options);
        return item.deletedAt ? null : item;
    }
    async findOneByCondition(condition = {}) {
        return await this.model
            .findOne({
            ...condition,
            deletedAt: null,
        })
            .exec();
    }
    async findAll(condition, options) {
        const [count, items] = await Promise.all([
            this.model.countDocuments({ ...condition, deletedAt: null }),
            this.model.find({ ...condition, deletedAt: null }, options?.projection, options),
        ]);
        return {
            count,
            items,
        };
    }
    async update(id, dto) {
        return await this.model.findOneAndUpdate({ _id: id, deletedAt: null }, dto, { new: true });
    }
    async softDelete(id) {
        const delete_item = await this.model.findById(id);
        if (!delete_item) {
            return false;
        }
        return !!(await this.model
            .findByIdAndUpdate(id, { deletedAt: new Date() })
            .exec());
    }
    async permanentlyDelete(id) {
        const delete_item = await this.model.findById(id);
        if (!delete_item) {
            return false;
        }
        return !!(await this.model.findOneAndDelete({ id: id }));
    }
}
exports.BaseRepositoryAbstract = BaseRepositoryAbstract;
//# sourceMappingURL=base.abstract.repository.js.map