import { create, login, read } from "../services/userService.js"

export const createUser = async (req, res) => {
    try {
        let results = await create(req.body.email, req.body.password)
        res.json({ results })


    } catch (error) {
        res.status(500).send(error)
    }
}

export const loginUser = async (req, res) => {
    try {
        let results = await login(req.body.email, req.body.password)
        res.cookie("jwt", results.token, results.cookiesOptions)
        res.json({ results })
    } catch (error) {
        res.status(400).send(error)
    }
}

export const readToken = async (req, res) => {
    try {
        if (req.cookies.jwt) {
            let results = await read(req.cookies.jwt)
            res.json(results);
        } else {
            res.json({ isToken: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export const logout = (req, res) => {
    res.clearCookie("jwt");
    return res.json({ message: "logout exitoso" })
};




