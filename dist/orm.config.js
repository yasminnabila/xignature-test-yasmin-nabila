"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "sqlite",
    database: "xignature_db",
    entities: ["dist/src/**/*.entity.js"],
    synchronize: true,
    migrations: ["dist/src/xignature_db/*.js"],
};
exports.default = config;
//# sourceMappingURL=orm.config.js.map