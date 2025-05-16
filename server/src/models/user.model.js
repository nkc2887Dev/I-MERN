const {mongoose} = require("../config/db.config");

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true})


const User = mongoose.model("User", userSchema, "user");

module.exports = User;