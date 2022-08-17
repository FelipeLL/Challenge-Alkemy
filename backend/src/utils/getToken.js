import jwt from "jsonwebtoken"
import Config from "../config/environment.js"

export const getToken = async (id) => {
    return jwt.sign({ id }, Config.jwtSecret, {
        expiresIn: "7d"
    })
}
