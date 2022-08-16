import connection from "../db/connection.js";

import { DataTypes } from "sequelize"

const UserModel = connection.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },

},
    {
        freezeTableName: true,

    }
)

export default UserModel