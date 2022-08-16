import express from "express"
import Config from "./config/environment.js"
import connection from "./db/connection.js"

const app = express()

app.listen(Config.port, () => {
    console.log(`server listening on port: ${process.env.PORT}`);
})

try {
    await connection.authenticate()
    console.log("successful connection to MySQL");
} catch (error) {
    console.log(`database error: ${error}`);

}