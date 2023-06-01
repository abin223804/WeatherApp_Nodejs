const express=require('express');
const app = express();

app.get('/',function(req,res){
    res.render('index')
})


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.post('/',function(req,res){
    res.render('index')
    console.log(req.body.city);
})


app.listen(4000,()=>{
    console.log('example app listening at 4000');
})