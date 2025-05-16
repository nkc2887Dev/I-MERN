const { createUserService, userListService } = require("../services/user.service")

const createUser = async (req, res) => {
    const result = await createUserService(req.body);
    if(!result){
        res.status(500).json({ success: false, data: {}, message: "failure"});
    }
    res.status(201).json({ success: true, data: result, message: "success" })
}

const userList = async (req, res) => {
    const result = await userListService(req.body);
    if(!result){
        res.status(500).json({ success: false, data: {}, message: "failure"});
    }
    res.status(201).json({ success: true, data: result, message: "success" })
}

module.exports = {
    createUser,
    userList,
}