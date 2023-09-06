const jwt = require("./jwt.js");

const USER_MODEL = require("../models/users");

// const {
//     LEVEL_TYPES,
//     GENDER_USER,
//     STATUS_USER
// }   = require('../config/constants/cf_constants');

let renderToView = async function (req, res, view, data) {
  let { token } = req.session;

  if (token) {
    let user = await jwt.verify(token);
    data.infoUser = user.data;
  } else {
    data.infoUser = undefined;
  }

  let listUser = await USER_MODEL.getList();

  let listComment = await COMMENT_MODEL.getList();
  let listResult = await RESULT_MODEL.getList();

  // data.moment                 = moment;
  data.page = page;
  data.listUser = listUser.data;

  data.LEVEL_TYPES = LEVEL_TYPES;
  data.GENDER_USER = GENDER_USER;
  data.STATUS_USER = STATUS_USER;

  return res.render(view, data);
};
exports.renderToView = renderToView;
