const mongoose = require("mongoose");

const CustomObjectId = new mongoose.Schema(
  {
    _id: { type: Number, default: 1, unique: true }, // Bắt đầu từ số 1
  },
  { _id: false }
);

module.exports = CustomObjectId;