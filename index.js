var express = require("express");
var app = express();
var bodyParse = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");

app.get("/hello", function (req, res) {
  res.json("Hello anh dương");
});
//Kết nối với localhost
app.use(cors());
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(express.static("./public"));

//Kết nối cơ sở dư liêu vào
const uri = "mongodb://127.0.0.1/thitracnghiem";
// mongoose.set('useCreateIndex', true); //ẩn cảnh báo
// mongoose.set('useUnifiedTopology', true); // ẩn cảnh báo

mongoose.connect(uri, { useNewUrlParser: true });
//Làm thì tách router ra trong project nhom22_tracnghiemapi nhé
const USER_ROUTER = require("./nhom22_tracnghiemapi/routing/user");

//Còn cái này chỉ sài router để gọi api vào sài thôi
app.use("/user", USER_ROUTER);

//Làm thì test cái api rồi nhớ comment code cho người ta còn biết gọi nó
//Ak nhe
//Config port
const PORT = process.env.PORT || 8000;

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
});
