import express from "express"
import { createOperation, getAllOperations, removeOperation, updateOperation, getAllOperationsIncomes, getAllOperationsExpenses } from "../controllers/operationController.js"

const router = express.Router()

router.get("/", getAllOperations)
router.get("/incomes", getAllOperationsIncomes)
router.get("/expenses", getAllOperationsExpenses)
router.post("/create", createOperation)
// router.post("/getnote/:id", getOneNote)
router.delete("/remove/:id", removeOperation)
router.put("/update/:id", updateOperation)

export default router