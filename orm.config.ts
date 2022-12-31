import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "xignature_db",
  entities: ["dist/src/**/*.entity.js"],
  synchronize: true,
  migrations: ["dist/src/xignature_db/*.js"],
};

export default config;
