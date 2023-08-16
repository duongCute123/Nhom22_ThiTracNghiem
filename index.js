var express=require("express")
var app=express()
var bodyParse = require("body-parser")
var cors = require("cors")
var db=require("./nhom22_tracnghiemapi/connect/connect")
app.get("/hello", function (req, res) {
    res.json("Hello anh dương")
})
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
//Kết nối cơ sở dư liêu vào
db.connect()
app.get("/hello",function (req,res) {
    res.json("Hello bạn nhé Dương")
})
//Làm thì tách router ra trong project nhom22_tracnghiemapi nhé
//Còn cái này chỉ sài router để gọi api vào sài thôi
//Làm thì test cái api rồi nhớ comment code cho người ta còn biết gọi nó
//Ak nhe
//Config port
var service = app.listen(8000, function (host, port) {
    var host = service.address().address
    var port = service.address().port
    console.log("Susscess nhé dương", host, port)
})