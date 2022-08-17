import UserModel from "../models/UserModel.js"

export const verifyEmailExist = async (email) => {
    let results = await UserModel.findOne({
        where: {
            email
        },
    })
    return results
}

export const createNewUser = async (user) => {
    await UserModel.create(user)
    return { message: "user created successfully" }
}