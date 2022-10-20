const express=require('express')
const app=express()
const articleRouter=require('./routes/articles')
const mongoose=require('mongoose')
const  Article=require('./models/article')
//passing and connecting to the database
mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser: true,useUnifiedTopology:true
})

app.set('view engine','ejs')

//This line enables the use of a form to pass data to the database
app.use(express.urlencoded({extended:false}))

//The main route
app.get('/', async (req,res)=>{
    const articles= await Article.find().sort({
        createdAt:'desc'
    })
    res.render('articles/index',{articles: articles})
})
//Everything wil be renderd in this articles route
app.use('/articles', articleRouter)

app.listen(5001)