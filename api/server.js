const express = require('express')
const app = express()
const request =require('request')
//const fs =require('fs')
//const path =require('path')
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,DELETE,PUT,POST");
	res.header("Access-Control-Allow-Headers","content-type");
	next();
});
app.get("/fuck",function(req,res){
		//制造数据
		const datas =[]; 
		request('https://m.lagou.com/listmore.json',function(err,response,body){
			datas.push(JSON.parse(body).content.data.page.result);
//			console.log(JSON.parse(body).content.data.page.result);
			if(!err){
				res.json({
					ok:1,
					msg:datas
				})
			}
			else{
				res.json({
					ok:-1,
					msg:'服务器错误'
				})
			}
		})
})

app.listen(8090,function(){
	console.log('success')
})
