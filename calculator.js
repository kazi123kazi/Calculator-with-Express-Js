const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true} ));

const port = 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
  
});
app.post('/',function(req,res){
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var result=num1+num2;
    res.send('The aum is '+result);
});
app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
  
});
app.post('/bmiCalculator',function(req,res){
    var num1=parseFloat(req.body.h);
    var num2=parseFloat(req.body.w);
    var result=num1/(num2*num2);
     res.send('The bmi is '+result);
 });
app.listen(port,function(){
    console.log('Started');
});