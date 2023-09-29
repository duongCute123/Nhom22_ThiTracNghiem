const route = require("express").Router();
const USER_MODEL = require("../models/users.model");
const { verify } = require("../utils/jwt");
const { updateInfoUserBasic } = require("../models/users.model");

route.get("/me", async (req, res) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.substring(7);
  const user = await verify(token);
  const myProfile = await USER_MODEL.getInfo(user.data._id);
  return res.json(myProfile);
});

route.post("/create", async (req, res) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.substring(7);
  const user = await verify(token);
  if (user.data.role !== "SuperAdmin" && user.data.role !== "Interviewer") {
    res.json({ success: false, message: "Không được phép" }); //Check quyền của người đang đăng nhập
  }
  let { username, password, fullName, gender, role } = req.body;
  let infoUser = await USER_MODEL.createUser(
    username,
    password,
    fullName,
    gender,
    role
  );
  res.json(infoUser);
});
// Cập nhật thông tin
route.patch("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const { fullName, gender, birthDay, phone, address } = req.body;
    const result = await updateInfoUserBasic({
      userID,
      fullName,
      gender,
      birthDay,
      phone,
      address,
    });

    if (result.error) {
      return res.status(400).json({ error: true, message: result.message });
    }
    return res.json({ 
      success: true,
      data: result.data,
      message: result.message,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Có lỗi trong quá trình xử lý yêu cầu" });
  }
});

//TRANG ĐĂNG NHẬP
route.post("/login", async (req, res) => {
  //req.session.isLogin = true;
  let { username, password } = req.body;
  let infoUser = await USER_MODEL.signIn(username, password);

  if (!infoUser.error) {
    req.session.token = infoUser.data.token;
    req.session.username = req.body.username;
    req.session.user = infoUser.data.infoUser;
    req.user = infoUser.data.infoUser;
  }

  return res.json(infoUser);
  //renderToView(req, res, 'pages/dashboard-admin', { infoUser: infoUser.data })
});

//Đổi mat khau
route.post("/change-password", async (req, res) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.substring(7);
  const user = await verify(token);
  if (
    user.data.role !== "SuperAdmin" &&
    user.data.role !== "Interviewer" &&
    user.data.role !== "HRM"
  ) {
    res.json({ success: false, message: "Không được phép" });
  }
  let { passwordOld, passwordNew, userID } = req.body;
  let infoUser = await USER_MODEL.changePassword({
    userID,
    passwordOld,
    passwordNew,
  });

  if (infoUser.error) return res.json(infoUser);

  return res.json(infoUser);
});

//ĐĂNG XUẤT
route.get("/logout", async (req, res) => {
  req.session.token = undefined;
  return res.redirect("/");
});

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }
//TẠO MÔN HỌC
// route.get("/create-subject", ROLE_SUPER_ADMIN, async (req, res) => {
//   renderToView(req, res, "pages/add-subject", {});
// });

// //TẠO BỘ ĐỀ
// route.get("/create-exam", ROLE_ADMIN, async (req, res) => {
//   renderToView(req, res, "pages/add-exam", {});
// });

// //TẠO CÂU HỎI
// route.get("/create-question", ROLE_ADMIN, async (req, res) => {
//   renderToView(req, res, "pages/add-question", {});
// });

// //TRANG DASHBOARD
// route.get("/dashboard", ROLE_ADMIN, async (req, res) => {
//   renderToView(req, res, "pages/dashboard-admin", {});
// });

// //TRANG 404
// route.get("/page-not-found", async (req, res) => {
//   renderToView(req, res, "pages/page-404", {});
// });

// //TRANG CONTACT
// route.get("/contact", async (req, res) => {
//   renderToView(req, res, "pages/contact", {});
// });

// //TRANG LÀM TRẮC NGHIỆM
// route.get("/test-exam", checkActive, async (req, res) => {
//   let { examID } = req.query;
//   let infoExam = await EXAM_MODEL.getInfo({ examID });
//   renderToView(req, res, "pages/test-exam", { infoExam: infoExam.data });
// });

// //TRANG KẾT QUẢ  ==========>
// route.get("/result-exam", checkActive, async (req, res) => {
//   let { resultID } = req.query;
//   let { examID } = req.query;
//   //console.log(resultID, examID)
//   let infoResult = await RESULT_MODEL.getInfo({ resultID });
//   let infoExam = await EXAM_MODEL.getInfo({ examID });
//   renderToView(req, res, "pages/result-test-exam", {
//     infoResult: infoResult.data,
//     infoExam: infoExam.data,
//   });
// });

// route.post("/result-exam", checkActive, async (req, res) => {
//   let userID = req.session.user._id;

//   let { point, falseArr, trueArr, examID, unfinishQuestion } = req.body;

//   //console.log({ point, falseArr, trueArr, userID, examID })

//   // Kiểm tra quyền/check về logic (nếu có)

//   // Thực hiện hành động sau khi đã check logic
//   let resultInsert = await RESULT_MODEL.insert({
//     point,
//     falseArr,
//     trueArr,
//     examID,
//     unfinishQuestion,
//     createAt: Date.now(),
//     userID,
//   });
//   return res.json(resultInsert);
// });

// route.get("/list-result-exam", ROLE_ADMIN, async (req, res) => {
//   renderToView(req, res, "pages/list-result-exam", {});
// });
// //TRANG DANH SÁCH BỘ ĐỀ THEO NGÀNH
// route.get("/list-of-subjects", async (req, res) => {
//   let { subjectID } = req.query;
//   let listExamOfSubject = await EXAM_MODEL.getListOfSubjects({ subjectID });
//   //console.log( listExamOfSubject.data )
//   renderToView(req, res, "pages/list-exam-of-subject", {
//     subjectID,
//     listExamOfSubject: listExamOfSubject.data,
//   });
// });

// //TRANG DANH SÁCH BỘ ĐỀ THEO Mức độ
// route.get("/list-exam-with-level", async (req, res) => {
//   let { subjectID, level } = req.query;
//   let listExamWithLevel = await EXAM_MODEL.getListExamWithLevel({
//     subjectID,
//     level,
//   });
//   //return res.json(listExamWithLevel);
//   renderToView(req, res, "pages/list-exam-of-level", {
//     listExamWithLevel: listExamWithLevel.data,
//   });
// });

// //Danh sách đề thi đã lưu
// route.get("/list-exam-by-save", checkActive, async (req, res) => {
//   let userID = req.session.user._id;
//   let listExamBySave = await EXAM_MODEL.getList();
//   renderToView(req, res, "pages/list-exam-by-save", {
//     listExamBySave: listExamBySave.data,
//     userID,
//   });
// });

// //lịch sử thi
// route.get("/history-test", checkActive, async (req, res) => {
//   let userID = req.session.user._id;
//   //listResult
//   renderToView(req, res, "pages/history-test", { userID });
// });

// route.get("/list-exam", async (req, res) => {
//   //console.log( listExamOfSubject.data )
//   renderToView(req, res, "pages/list-exam", {});
// });

// route.get("/info-exam", async (req, res) => {
//   //console.log( listExamOfSubject.data )
//   let { examID } = req.query;
//   let infoExamHaveQuestion = await EXAM_MODEL.getInfo({ examID });
//   //console.log(infoExamHaveQuestion)
//   renderToView(req, res, "pages/info-exam", {
//     infoExamHaveQuestion: infoExamHaveQuestion.data,
//   });
// });

// //Tìm kiếm theo key và bộ đề
// route.post("/list-result-of-search", async (req, res) => {
//   let { key, examID } = req.body;
//   let listResultOfSearch = await RESULT_MODEL.getListStudentInResultByKey({
//     key,
//     examID,
//   });
//   //console.log({ listResultOfSearch });
//   res.json(listResultOfSearch);
// });

module.exports = route;
