const { request } = require('express');
const express= require('express');
const app= express();
const NewsAPI= require('newsapi')
const axios = require('axios');

const {engine} = require ('express-handlebars')

app.engine('handlebars',engine());

app.use(express.static(__dirname+'/style'));

app.set('view engine', 'handlebars');
app.set('views','./views');
app.get('/', async (req,res)=>{
    if(req.query.name ==''|| req.query.name ===undefined){
        res.render('index');
    }
    let busqueda = req.query.name;
    console.log(req.query.name);
    let URL = `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=b8c80cf9f11b46e38628af60dc6fa89e`
    const news_b = await axios.get(URL);
    //console.log(news_b.data);
    res.render('index',{articles: news_b.data.articles});
});


app.listen(3000,()=>{
    console.log('entre al listen');
})