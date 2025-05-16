const Joi = require("joi");

const createUserValidate = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
})


module.exports = {
    createUserValidate
}