import "dotenv/config";

const Config = {

    port: process.env.PORT || 5000,
    host: process.env.HOST,
    database: process.env.DATABASE,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    jwtCookieExpire: process.env.JWT_COOKIE_EXPIRES,

}

export default Config
