const express = require("express");
const { createUser, userList } = require("../controllers/user.controller");
const validate = require("../middlewares/validate.middleware");
const { createUserValidate } = require("../validations/user.validate");
const router = express.Router()

router.post("/create", validate(createUserValidate), createUser)
router.get("/list", userList)

module.exports = router;



