const {Users}=require('../db/model')


exports.getUserById=async(req,res,next,id)=>{
    try {
        const user=await Users.findOne({ where: { id} });
        user.password=undefined
        req.profile=user
    } catch (e) {
        res.status(404).json({
            error:e
        })
        
    }
    next()
}



exports.getUser=async(req,res)=>{
    return res.json(req.profile)
 }
 
 exports.updateUser=async(req,res)=>{
     try {
         const user= await Users.findOne({where:{id:req.profile.id}})
         
         user.update(req.body)   
         const {email,username,id}=user
           res.status(200).json({email,username,id})
               
     } catch (e) {
         res.status(500).json({
             message:'No user found'
         })
     }
 
 
 }