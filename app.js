const express = require('express');
const fetch = require('node-fetch');



const app = express();
app.set('view engine',"ejs");



const API = "https://api.rootnet.in/covid19-in/stats/latest";
const APi = 'https://disease.sh/v2/countries';

app.get('/',function(req,res){
    res.send("/getVal");
    
})

app.get('/getVal',function(req,res){
    const URL = APi;
    fetch(URL).then(res => res.json())
    .then(function(json){
        var data = json;
        var cases = data[0].cases;
        res.send({cases});
    } );
    // res.send("wow it is working");
    
})

app.listen(5000,function(){
    console.log("starting server");
})