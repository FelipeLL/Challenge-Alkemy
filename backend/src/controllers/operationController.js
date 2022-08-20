import { getAll, create, remove, update, getAllIncomes, getAllExpenses } from "../services/operationService.js"

export const getAllOperations = async (req, res) => {
    try {
        let operations = await getAll(req.params.id)
        res.json(operations)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getAllOperationsIncomes = async (req, res) => {
    try {
        let operations = await getAllIncomes(req.params.id)
        res.json(operations)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getAllOperationsExpenses = async (req, res) => {
    try {
        let operations = await getAllExpenses(req.params.id)
        res.json(operations)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createOperation = async (req, res) => {
    try {

        let results = await create(req.body.under, req.body.amount, req.body.type, req.body.ID_user)
        res.json({ results })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const removeOperation = async (req, res) => {
    try {
        let results = await remove(req.params.id)
        res.json({ results })
    } catch (error) {
        res.status(500).json({ error: error })
    }

}

export const updateOperation = async (req, res) => {
    try {
        let results = await update(req.body.under, req.body.amount, req.params.id)
        res.json({ results })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}



