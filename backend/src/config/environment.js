import "dotenv/config";

const Config = {

    port: process.env.PORT,
    host: process.env.HOST,
    database: process.env.DATABASE,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,

}

export default Config
