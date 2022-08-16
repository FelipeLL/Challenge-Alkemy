import connection from "../db/connection";

import { DataTypes } from "sequelize"

const CategoryModel = connection.define("category", {
    ID_category: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },

},
    {
        freezeTableName: true,
    }
)

export default CategoryModel