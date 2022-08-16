import express from "express"
import Config from "./config/environment.js"
const app = express()

app.listen(Config.port, () => {
    console.log(`server listening on port: ${process.env.PORT}`);
})