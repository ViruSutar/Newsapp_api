const express=require('express')
const router=express.Router()
const {createArticle,getArticleById,getallArticles,ArticleValidator, UpdateArticle, deleteArticle, getArticle}=require('../controllers/article')
const {getUserById}=require('../controllers/user')
const {isSignedIn,isAuthenticated}=require('../middlewares/requireLogin')
const {isOwner}=require('../middlewares/isOwner')

router.param('articleId',getArticleById);
router.param('userId',getUserById)

router.post('/create/:userId',isSignedIn,isAuthenticated,ArticleValidator,createArticle)

router.patch('/update/:userId/:articleId',isSignedIn,isAuthenticated,isOwner,UpdateArticle)

//To get a specific article
router.get('/getArticle/:articleId',isSignedIn,getArticle)

router.delete('/delete/:userId/:articleId',isSignedIn,isAuthenticated,isOwner,deleteArticle)

//to get all articles
router.get('/getAll',isSignedIn,getallArticles)

module.exports=router