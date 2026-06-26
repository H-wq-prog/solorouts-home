const express = require("express")

const router = express.Router();
const {register, login} = require("../controllers/authControlleer")
const { registerSchema,loginSchema} = require("../validation/authValidation")
const validate = require("../middleware/validationMiddleware")

router.post("/register",validate(registerSchema), register);

router.post("/login" , validate(loginSchema) , login)

module.exports = router;