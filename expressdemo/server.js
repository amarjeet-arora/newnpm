var express= require('express');
var bp= require('body-parser');
var _= require('underscore');
var app= express();
app.use(bp.json());

var uid=1;
app.use(express.static('public'));

var mytask=[]

app.get('/getmypendings',function(req,res){
    res.json(mytask);
})

app.post('/postmypendings',(req,res)=>{
var data= req.body;
data.id=uid++;
mytask.push(data);
res.json(data);
})


app.listen(3000,function() {
    console.log('server is started');
})