const express=require('express')
const router=express.Router()
//linking to the model folder 
const Article=require('./../models/article')

router.get('/new', (req,res)=>{
    res.render('articles/new', {article:new Article()})
})
router.get('/:id',(req,res,)=>{
    const article= Article.findById(req.params.id)
res.render('articles/show',{article:article})
})

router.post('/', async(req,res)=>{
let article=new Article({
   title: req.body.title,
   description: req.body.description,
   markdown: req.body.markdown
})
//This is asynchronous process.
try{
    article=await article.save()
    res.redirect(`/articles/${article.id}`)
}catch(e){
res.render('articles/new',{article:article})
}

})

module.exports=router