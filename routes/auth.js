const express=require('express')
const router=express.Router()
const {check}=require('express-validator')
const {signin,signup,signout}=require('../controllers/auth')

router.post('/signup',[
    check("username","name should be at least 3 char").isLength({min:3}),
    check("email","Please enter valid email").isEmail(),
    check("password","password should be at least 3 char").isLength({min:3})
],signup)

router.post('/signin',[
    check("email","email is required").isEmail(),
    check("password","password field is required").isLength({min:1})
],signin)


module.exports=router