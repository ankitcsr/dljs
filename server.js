const express = require('express')
const app = express()


app.get("/",(req,res)=>{
res.sendFile(__dirname+'/index.html')
})
app.get("/model",(req,res)=>{
res.sendFile(__dirname+'/head_pose.onnx')
})



app.listen(5000,()=>{
	console.log(" running on port 5000 ")
})