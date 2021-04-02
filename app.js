const express=require('express');
const app=express()
const {db}=require('./db/model')

require('dotenv').config({path:'./.env'})

//Routes
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const articleRoutes=require('./routes/article')

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//My routes
app.use('/auth',authRoutes)
app.use('/user',userRoutes)
app.use('/article',articleRoutes)




const PORT=process.env.PORT || 5252

app.listen(PORT,()=>console.log(`App is running on PORT ${PORT}`))


// db.sync({alter:true})
//   .then(() => {
// const PORT =process.env.PORT || 5252

//     app.listen(PORT, () => {
//       console.log('server started on http://localhost:5252')
//     })
//   })
//   .catch((err) => {
//     console.error(new Error('Could not start database'))
//     console.error(err)
//   })