const {Users}=require('../db/model')
const bcrypt=require('bcryptjs')
const {validationResult}=require('express-validator')
const jwt=require('jsonwebtoken')


//password verification 
const validatePassword=async function(candidatePassword,userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

exports.signup=async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10)
        const password=await req.body.password;
        const errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(422).json({
                error:errors.array()[0].msg
            })
        }

        const user=await Users.create({
            username:req.body.username,
            password:bcrypt.hashSync(password,salt),
            email:req.body.email
        })
        res.status(200).json({
            user
        })
        
    } catch (e) {
        res.status(500).json({
            error:e
        })
    }
}


exports.signin=async (req,res)=>{
  const {email,password}=req.body

  //Checking if user has filled the pass and email fields
  if(!email || !password){
      return res.status(400).json({
          message:'Please enter valid details'
      })
  }

  const user=await Users.findOne({where:{email}});

  if(!user || !(validatePassword(password,user.password))){
      return res.status(404).json({
          message:'Incorrect email or password'
      })
  }

  //create token
const token=jwt.sign({id:user.id},process.env.SECRET)

//put token in cookie
res.cookie("token",token,{expiresIn:new Date() + 10})


const {id,username}=user

//Send response to front end
return res.status(200).json({
    token,
    user:{id,email,username}
})

}


exports.signout=(req,res)=>{
    res.clearCookie("token");
    res.json({
        message:'User signout successfully'
    })
}
