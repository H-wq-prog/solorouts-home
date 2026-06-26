const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { registerSchema } = require("../validation/authValidation")
const register = async (req, res) => {
    try {
        const { error } = registerSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ mas: "your acont is exept " })

        }
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ mas: "email aready exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await User.create({
            username,
            email,
            password: hashedPassword
        })

    } catch (error) {
        res.status(500).json({ mas: "server has error" })
    }
}