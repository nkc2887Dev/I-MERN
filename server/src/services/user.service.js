const User = require("../models/user.model");

const createUserService = async (data) => {
    try {
        const user = await User.findOneAndUpdate({ email: data.email }, data, { new: true, upsert: true });
        return user
    } catch (error) {
        console.error("Error - createUserService : ", error)
        throw error;
    }
};

const userListService = async (data) => {
    try {
        return User.find();
    } catch (error) {
        console.error("Error - userListService : ", error)
        throw error;
    }
};

module.exports = {
    createUserService,
    userListService
}