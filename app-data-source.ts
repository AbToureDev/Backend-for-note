import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "test",
    entities: ["src/entity/*.ts"],
    subscribers: ["src/subscriber/*.ts"],
    logging: true,
    synchronize: true,
})