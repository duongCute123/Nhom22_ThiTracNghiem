const route = require("express").Router();
const USER_MODEL = require("../models/users");
// const EXAM_MODEL        = require('../../models/exam');
// const RESULT_MODEL      = require('../../models/result');
const { uploadMulter } = require("../utils/config_multer");
// const passport          = require('passport');
const ROLE_ADMIN = require("../utils/checkRole");
const ROLE_SUPER_ADMIN = require("../utils/roleSuperAdmin");

const checkActive = require("../utils/checkActive");
const { renderToView } = require("../utils/childRouting");

// route.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
//     // xử lý sau khi user cho phép xác thực với facebook
// route.get('/auth/facebook/callback',

//     passport.authenticate('facebook', {

//         successRedirect: '/',
//         failureRedirect: '/'
//     })
// );

// route.get('/', async (req, res) => {
//     renderToView(req, res, 'pages/home', { })
// })

//Thông tin user
route.get("/info-user", async (req, res) => {
  let authorID = req.session.user._id;
  let { userID } = req.query;
  if (authorID.toString() == userID.toString()) {
    let infoUserDb = await USER_MODEL.getInfo(userID);
    renderToView(req, res, "pages/info-user", { infoUserDb: infoUserDb.data });
  } else {
    res.json("Không được phép vào");
  }
});

//TRANG ĐĂNG KÝ
route.get("/register", async (req, res) => {
  renderToView(req, res, "pages/register", {});
});

route.post("/register", async (req, res) => {
  let { email, password, fullname } = req.body;
  let infoUser = await USER_MODEL.register(email, password, fullname);
  res.json(infoUser);
});
//TRANG ĐĂNG NHẬP
route.post("/login", async (req, res) => {
  //req.session.isLogin = true;
  let { email, password } = req.body;
  let infoUser = await USER_MODEL.signIn(email, password);


  if (!infoUser.error) {
    req.session = infoUser.data.token; //gán token đã tạo cho session
    req.session.email = req.body.email;
    req.session.user = infoUser.data.infoUser;
    req.user = infoUser.data.infoUser;
  }

  return res.json(infoUser);
  //renderToView(req, res, 'pages/dashboard-admin', { infoUser: infoUser.data })
});

//Đổi email
route.post("/change-email", async (req, res) => {
  let { email, password, userID } = req.body;
  let infoUser = await USER_MODEL.changeEmail({ userID, email, password });

  console.log({ infoUser });

  if (infoUser.error) return res.json(infoUser);

  return res.json(infoUser);
});

//Đổi mat khau
route.post("/change-password", async (req, res) => {
  let { passwordOld, passwordNew, userID } = req.body;
  let infoUser = await USER_MODEL.changePassword({
    userID,
    passwordOld,
    passwordNew,
  });

  console.log({ infoUser });

  if (infoUser.error) return res.json(infoUser);

  return res.json(infoUser);
});

//ĐĂNG XUẤT
route.get("/logout", async (req, res) => {
  req.session.token = undefined;
  return res.redirect("/");
});

// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) { return next(); }
//     res.redirect('/login')
// }

module.exports = route;
