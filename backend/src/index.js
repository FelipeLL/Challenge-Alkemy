import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import Config from "./config/environment.js"
import userRoute from "./routes/userRoute.js"
import operationRoute from "./routes/operationRoute.js"
import connection from "./db/connection.js"

const app = express()
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsConfig = {
    credentials: true,
    origin: ["http://localhost:3000"]
}

app.use(cors(corsConfig))

app.use("/users", userRoute)
app.use("/operations", operationRoute)

app.listen(Config.port, () => {
    console.log(`server listening on port: ${Config.port}`);
})

try {
    await connection.authenticate()
    console.log("successful connection to MySQL");
} catch (error) {
    console.log(`database error: ${error}`);

}