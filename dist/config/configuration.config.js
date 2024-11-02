"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database_config = void 0;
const database_config = () => ({
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        uri: process.env.DATABASE_URI,
    },
});
exports.database_config = database_config;
//# sourceMappingURL=configuration.config.js.map