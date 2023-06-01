const express=require('express');
const request=require('request');
const app = express();

const apiKey='2dea46eb0c0b90c64fbc1252417ecea2';




app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');



app.get('/',function(req,res){
    res.render('index',{weather:null,error:null});
})

app.post('/',function(req,res){
    let city=req.body.city;
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    request(url,function(err,response,body){
        if(err){
            res.render('index',{weather:null,error:'error,please try again'});


        }else{
            let weather=JSON.parse(body)
            if(weather.main==undefined){
                res.render('index',{weather:null,error:'error,try major cities'});
            }else{
                let weatherText=`It's ${weather.main.temp} degree in ${weather.name}!`
                res.render('index',
                {weather:weatherText,
                error:null});
            }
        }
    });
    
   
})





app.listen(4000,()=>{
    console.log('example app listening at 4000');
})

