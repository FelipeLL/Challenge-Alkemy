import OperationModel from "../models/OperationModel.js"

export const getAllOperations = async () => {
    let results = await OperationModel.findAll({
        limit: 10,
        order: [['createdAt', 'DESC']],
    })
    return results
}

export const getAllOperationsIncomes = async () => {
    let results = await OperationModel.findAll({
        where: {
            type: "income"
        }
    })
    return results
}

export const getAllOperationsExpenses = async () => {
    let results = await OperationModel.findAll({
        where: {
            type: "expense"
        }
    })
    return results
}

export const createNewOperation = async (operation) => {
    await OperationModel.create(operation)
    return { message: "operation created successfully" }
}

export const deleteOperation = async (idOperation) => {
    await OperationModel.destroy({
        where: { ID_operation: idOperation },
    })
    return { message: "operation deleted successfully" }

}

export const updateOperation = async (operation, idOperation) => {
    await OperationModel.update(operation, {
        where: { ID_operation: idOperation }
    })
    return { message: "operation update successfully" }
}
