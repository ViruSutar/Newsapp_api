const {Users,Articles}=require('../db/model')
const {check}=require('express-validator')
const Formidable=require('formidable')
const _=require('lodash')
const fs=require('fs')

//Article validator
exports. ArticleValidator=[
    check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid title.')
    .isLength({ max: 255 })
    .withMessage('Title cannot be longer than 255 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid Article.')
]


exports.getArticleById=async(req,res,next,id)=>{
    try {
        const article=await Articles.findOne({ where: { id},
            attributes: {
                exclude: ['createdAt', 'updatedAt','UserId']
            },
            include:{
                model:Users,
            attributes:['username'] 

            }
        });
        req.article=article
        
    } catch (e) {
        res.status(404).json({
            error:e
        })
    }

    next()
}



//cretea article
exports.createArticle=async(req,res)=>{
    
      let form=new Formidable.IncomingForm();
      form.keepExtensions=true

      form.parse (req, async(err,fields,file)=>{
          if(err){
              return res.status(400).json({error:"Something went wront with image"})
          }

          const {title,description,image}=fields

          if(!title || ! description){
              return res.json({
                  message:"These fields can't be empty"
              })
          }
          
         
          let article=new  Articles({
              title,
              description,
              image,
              UserId:req.profile.id                 
        })

          if(file.image){
              if(file.image.size > 4000000){
                  return res.status(400).json({
                      error:"File size too big"
                  })
              }
              article.image=fs.readFileSync(file.image.path)
              article.image.contentType=file.image.type
              console.log(fields)
          }
          article.save().then(data=>{
              res.status(200).json(data)
          })
      })    
    
}


//get all
exports.getallArticles=async(req,res)=>{
    try {
        const article=await Articles.findAll({ 
            attributes: {
                exclude: ['updatedAt','description','image','UserId','id']
            },
            include:{
                model:Users,
            attributes:['username'] 
    
            }
        })

        res.status(200).json({
            AllArticles:article
        })
        
    } catch (e) {
        res.status(400).json({
            error:e
        })
    }
}


// update article
exports.UpdateArticle=async (req,res)=>{
      let form=new Formidable.IncomingForm();
      form.keepExtensions=true
  
      form.parse (req, async(err,fields,file)=>{
          if(err){
              return res.status(400).json({error:"Something went wrong with image"})
          }
  
          
         
          let article=req.article
           article=_.extend(article,fields) 
          if(file.image){
              if(file.image.size > 4000000){
                  return res.status(400).json({
                      error:"File size too big"
                  })
              }
              article.image=fs.readFileSync(file.image.path)
              article.image.contentType=file.image.type
          }
          article.save().then(data=>{
              res.status(200).json(data)
          })
      })
        
    } 
  
 exports.getArticle=(req,res)=>{
     res.json(req.article)
 }   

    
exports.deleteArticle=async(req,res)=>{

      
const article=await Articles.findOne({where:{id:req.article.id}})
  
article.destroy()
res.json({
    message:"Deletion was successfull"
})
}






    