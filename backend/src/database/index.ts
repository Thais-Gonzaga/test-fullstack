import { DataSource } from "typeorm";
console.log(__dirname);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "customers",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection error"));
