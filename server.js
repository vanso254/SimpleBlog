const express=require('express')
const app=express()
const articleRouter=require('./routes/articles')
const mongoose=require('mongoose')
//passing and connecting to the database
mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser: true,useUnifiedTopology:true
})

app.set('view engine','ejs')

//This line enables the use of a form to pass data to the database
app.use(express.urlencoded({extended:false}))

//The main route
app.get('/',(req,res)=>{
    const articles=[{
        title:'Test Article',
        createdAt:new Date(),
        description:'Test Description'
    },
    {
        title:'Test Article 1',
        createdAt:new Date(),
        description:'Test Description'
    }]
    res.render('articles/index',{articles: articles})
})
//Everything wil be renderd in this articles route
app.use('/articles', articleRouter)

app.listen(5001)