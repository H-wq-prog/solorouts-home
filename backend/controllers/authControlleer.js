const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {registerSchema} = require("../validation/authValidation")

const register = async (req , res) =>{
    try{
        const {error} = registerSchema.validate(req.body)
        if(error)
        {
            return res.status(400).json({mas:"your acont is exept"})
        }
        const {username , email , password} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({mas:"email aready exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username, 
            email,
            password:hashedPassword
        })
        

    }catch(error){
res.status(500).json({
        error: error.message
    })    }
}

const login = async (req, res ) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({mas:"user not found "})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({mas:"password is wrong"})
        }
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        res.json({token});
    }catch(error){
res.status(500).json({
        error: error.message
    })    }
}

module.exports = {register, login}