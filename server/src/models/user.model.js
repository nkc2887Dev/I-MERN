const {mongoose} = require("../config/db.config");

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // validate: {
        //     validator: (value) => {
        //         return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid email!`
        // },
        // match:[
        //     "/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/",
        //     "Please fill a valid email address"
        // ]
    }
}, { timestamps: true})


const User = mongoose.model("User", userSchema, "user");

module.exports = User;