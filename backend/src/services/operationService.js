
import { getAllOperations, createNewOperation, deleteOperation, updateOperation, getAllOperationsIncomes, getAllOperationsExpenses } from "../Dao/operationDao.js";

export const getAll = async (id) => {
    return await getAllOperations(id)
}

export const getAllIncomes = async (id) => {
    return await getAllOperationsIncomes(id)
}

export const getAllExpenses = async (id) => {
    return await getAllOperationsExpenses(id)
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