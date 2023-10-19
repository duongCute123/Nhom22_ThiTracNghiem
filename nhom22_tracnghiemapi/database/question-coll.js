const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  /**
   * Tên
   */
  name: String,

  /**
   * Cau tra loi
   */
  answers: [
    {
      option: String, // Văn bản lựa chọn (ví dụ: A, B, C, D)
      isCorrect: Boolean, //  boolean để chỉ ra liệu nó có phải là câu trả lời đúng không
    },
  ],

  /**
   * Bo de
   */
  exam: {
    type: Schema.Types.ObjectId,
    ref: "exam",
  },

  point: String,

  correct: Number,
});

const QUESTION_MODEL = mongoose.model("question", QuestionSchema);
module.exports = QUESTION_MODEL;
