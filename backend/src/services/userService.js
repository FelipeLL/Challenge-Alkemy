import { verifyEmailExist, createNewUser } from "../Dao/userDao.js"
import { hashPassword, comparePassword } from "../utils/hashPassword.js"
import { getToken } from "../utils/getToken.js"
import Config from "../config/environment.js"

export const create = async (email, password) => {
    let existEmail = await verifyEmailExist(email)
    if (existEmail !== null) {
        throw "Email already exists"
    } else {
        const user = await hashPassword(email, password)
        return await createNewUser(user)
    }
}

export const login = async (email, password) => {

    let existEmail = await verifyEmailExist(email)

    if (existEmail === null || !(await comparePassword(password, existEmail.password))) {

        throw "Email/password are incorrect"
    } else {
        let isOnline = true;
        const token = await getToken(existEmail.id)

        const cookiesOptions = {
            expires: new Date(
                Date.now() +
                parseInt(Config.jwtCookieExpire) * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        };

        // res.cookie("jwt", token, cookiesOptions);


        return { isOnline, cookiesOptions, token }
    }


}