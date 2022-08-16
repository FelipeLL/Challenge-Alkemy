import { Sequelize } from "sequelize"
import Config from "../config/environment.js"

const connection = new Sequelize(Config.database, Config.dbUsername, Config.dbPassword, {
    host: Config.host,
    dialect: "mysql"
})

export default connection