import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "xignature_db",
  entities: ["dist/src/**/*.entity.ts"],
  synchronize: true,
};

export default config;
