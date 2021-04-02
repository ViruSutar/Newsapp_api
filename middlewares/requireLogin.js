
const expressJwt=require('express-jwt');

//This middleware to check if user is logged in or not
exports.isSignedIn=expressJwt({
    secret:process.env.SECRET,
    algorithms: ['HS256'],
    userProperty:"auth"
});

//This middleware check auth token with user id 
exports.isAuthenticated=(req,res,next)=>{
    let checker=req.profile && req.auth && req.profile.id ==req.auth.id
    if(!checker){
        return res.status(403).json({
            error:"ACCESS DENIED"
        })
    }
 
     next()
 }