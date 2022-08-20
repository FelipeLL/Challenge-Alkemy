import express from "express"
import { createOperation, getAllOperations, removeOperation, updateOperation, getAllOperationsIncomes, getAllOperationsExpenses } from "../controllers/operationController.js"

const router = express.Router()

router.get("/getAll/:id", getAllOperations)
router.get("/incomes/:id", getAllOperationsIncomes)
router.get("/expenses/:id", getAllOperationsExpenses)
router.post("/create", createOperation)
// router.post("/getnote/:id", getOneNote)
router.delete("/remove/:id", removeOperation)
router.put("/update/:id", updateOperation)

export default router