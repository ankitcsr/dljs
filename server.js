const express = require('express')
const app = express()

app.use('/weight', express.static(__dirname+'/weight'))

app.get("/",(req,res)=>{
res.sendFile(__dirname+'/index.html')
})
app.get("/model",(req,res)=>{
res.sendFile(__dirname+'/head_pose.onnx')
})
app.get("/face-api.js",(req,res)=>{
res.sendFile(__dirname+'/face-api.js')
})


app.listen(5000,()=>{
	console.log(" running on port 5000 ")
})