const {Articles}=require('../db/model')


//This middleware build to allow only owner of article to perform operation on it
//Actually this middleware is not necessary if we build front end of this application
//But i am building only api that's why i am using it
exports.isOwner=async(req,res,next)=>{
    try {
        const auth=await Articles.findOne({where:{id:req.article.id}})
        let checker=auth.UserId !== req.profile.id
    
        if(checker){
          return  res.json({
               message:"You can't perform any Operations on this article"
           })
        }
        next()
    } catch (e) {
        res.json({
            message:"Article not found"
        })
    }
   
}
