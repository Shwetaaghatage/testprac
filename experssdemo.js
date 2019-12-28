//step express include
express=require('express');
app=express();
fs=require('fs');
mymodule=require('./mymodule'); 
//get put post delete  use 
//app.use(function(req,resp,next)
//{
	//resp.send("<h1>Welcome to express</h1>");
	//next();
//});
app.get('/',function(req,resp){
	//resp.send("<form action='add'>Enter Number 1:<input type='text' name='num1'><br>Enter Number 2:<input type='text' name='num2'><br><input type='submit' value='Add'></form>");
	resp.sendFile('form.html',{root:__dirname});
});
app.get('/add',function(req,resp){
	//get way to retervie data
	console.log(req);
	console.log(req.query.num1+' '+req.query.num2);	
	a=req.query.num1;
	b=req.query.num2;
	if(req.query.opr=='add')
	{
	//add=mymodule.add(req.query.num1,req.query.num2);
	add=mymodule.add(a,b);
	resp.send('<h1>Addition :</h1>'+add);
	}
	else if(req.query.opr=='sub')
	{
	sub=mymodule.sub(req.query.num1,req.query.num2);
	resp.send('<h1>Sub :</h1>'+sub);
		
	}
	else if(req.query.opr=='mul')
	{
	mul=mymodule.mul(req.query.num1,req.query.num2);
	resp.send('<h1>Mul :</h1>'+mul);
		
	}
	else if(req.query.opr=='div')
	{
	div=mymodule.div(req.query.num1,req.query.num2);
	resp.send('<h1>Divison :</h1>'+div);
		
	}
});
app.listen(1186);
console.log('Server Running at Port No 1186');