const express=require('express')
const router=express.Router()
const {getUser,updateUser,getUserById}=require('../controllers/user')
const {isSignedIn,isAuthenticated}=require('../middlewares/requireLogin')

//param middleware  
router.param("userId",getUserById)


router.get('/getuser/:userId',getUser)

router.patch('/updateuser/:userId',isSignedIn,isAuthenticated,updateUser)

module.exports=router