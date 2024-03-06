import { DataSource } from "typeorm";

const SqliteDataSource = new DataSource({
    database: 'bdaula.db',
    type: "sqlite",
    synchronize: false,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"]
    });   

SqliteDataSource.initialize()
.then(() => {
console.log("Data Source inicializado!")
})
.catch((e) => {
console.error("Erro na inicialização do Data Source:", e)
});
export default SqliteDataSource;