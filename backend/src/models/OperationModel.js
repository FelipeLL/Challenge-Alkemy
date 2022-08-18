import connection from "../db/connection.js";

import { DataTypes } from "sequelize"

const OperationModel = connection.define("operation", {
    ID_operation: { type: DataTypes.INTEGER, primaryKey: true },
    under: { type: DataTypes.STRING },
    amount: { type: DataTypes.DOUBLE },
    type: { type: DataTypes.STRING },
    ID_user: { type: DataTypes.INTEGER },


},
    {
        freezeTableName: true,
    }
)

export default OperationModel