import bcryptjs from "bcryptjs";

export const hashPassword = async (email, password) => {
    let passHash = await bcryptjs.hash(password, 8)
    return {
        email,
        password: passHash
    }
}

export const comparePassword = async (password, passwordResults) => {
    return await bcryptjs.compare(password, passwordResults)
}