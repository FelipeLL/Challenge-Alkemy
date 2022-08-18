
import { getAllOperations, createNewOperation, deleteOperation, updateOperation, getAllOperationsIncomes, getAllOperationsExpenses } from "../Dao/operationDao.js";

export const getAll = async () => {
    return await getAllOperations()
}

export const getAllIncomes = async () => {
    return await getAllOperationsIncomes()
}

export const getAllExpenses = async () => {
    return await getAllOperationsExpenses()
}

export const create = async (under, amount, type, ID_user) => {
    const operation = {
        under,
        amount,
        type,
        ID_user,
    }
    return await createNewOperation(operation)
}

export const remove = async (idOperation) => {
    return await deleteOperation(idOperation)
}

export const update = async (under, amount, idOperation) => {
    const operation = {
        under,
        amount,
    }

    return await updateOperation(operation, idOperation)
}