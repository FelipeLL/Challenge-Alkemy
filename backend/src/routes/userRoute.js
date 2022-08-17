import express from "express"
import { createUser, loginUser, readToken, logout } from "../controllers/userController.js"

const router = express.Router()

router.post("/create", createUser)
router.post("/login", loginUser)
router.get("/", readToken)
router.get("/logout", logout)



export default router