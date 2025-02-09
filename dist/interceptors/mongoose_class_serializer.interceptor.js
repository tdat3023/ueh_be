"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("mongoose");
function MongooseClassSerializerInterceptor(classToIntercept) {
    return class Interceptor extends common_1.ClassSerializerInterceptor {
        changePlainObjectToClass(document) {
            if (!(document instanceof mongoose_1.Document)) {
                return document;
            }
            return (0, class_transformer_1.plainToClass)(classToIntercept, document.toJSON());
        }
        prepareResponse(response) {
            if (!Array.isArray(response) && response?.items) {
                const items = this.prepareResponse(response.items);
                return {
                    count: response.count,
                    items,
                };
            }
            if (Array.isArray(response)) {
                return response.map(this.changePlainObjectToClass);
            }
            return this.changePlainObjectToClass(response);
        }
        serialize(response, options) {
            return super.serialize(this.prepareResponse(response), options);
        }
    };
}
exports.default = MongooseClassSerializerInterceptor;
//# sourceMappingURL=mongoose_class_serializer.interceptor.js.map