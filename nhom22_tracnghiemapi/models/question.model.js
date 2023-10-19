const ObjectID = require("mongoose").Types.ObjectId;
const QUESTION_COLL = require("../database/question-coll");
const EXAM_COLL = require("../database/exam-coll");

module.exports = class Question extends QUESTION_COLL {
  static insert({ nameQuestion, answers }) {
    return new Promise(async (resolve) => {
      try {
        let dataInsert = {
          name: nameQuestion,
          answers,
        };
        let infoAfterInsert = new QUESTION_COLL(dataInsert);
        let saveDataInsert = await infoAfterInsert.save();
        if (!saveDataInsert)
          return resolve({ error: true, message: "cannot_insert_data" });
        resolve({ error: false, data: infoAfterInsert });
      } catch (error) {
        return resolve({ error: true, message: error.message });
      }
    });
  }

  static getList() {
    return new Promise(async (resolve) => {
      try {
        let listQuestion = await QUESTION_COLL.find();

        if (!listQuestion)
          return resolve({ error: true, message: "cannot_get_list_data" });

        return resolve({ error: false, data: listQuestion });
      } catch (error) {
        return resolve({ error: true, message: error.message });
      }
    });
  }

  static getInfo({ questionID }) {
    return new Promise(async (resolve) => {
      try {
        if (!ObjectID.isValid(questionID))
          return resolve({ error: true, message: "params_invalid" });

        let infoQuestion = await QUESTION_COLL.findById(questionID);

        if (!infoQuestion)
          return resolve({ error: true, message: "cannot_get_info_data" });

        return resolve({ error: false, data: infoQuestion });
      } catch (error) {
        return resolve({ error: true, message: error.message });
      }
    });
  }

  static remove({ questionID, examID }) {
    return new Promise(async (resolve) => {
      try {
        if (!ObjectID.isValid(questionID) || !ObjectID.isValid(examID))
          return resolve({ error: true, message: "params_invalid" });

        let infoAfterRemove = await QUESTION_COLL.findByIdAndDelete(questionID);

        //console.log({ infoAfterRemove })

        if (!infoAfterRemove)
          return resolve({ error: true, message: "cannot_remove_data" });

        let deleteQuestionOfExam = await EXAM_COLL.findByIdAndUpdate(
          examID,
          {
            $pull: { question: infoAfterRemove._id },
          },
          { new: true }
        );

        //console.log({ deleteQuestionOfExam })

        return resolve({
          error: false,
          data: infoAfterRemove,
          message: "remove_data_success",
        });
      } catch (error) {
        return resolve({ error: true, message: error.message });
      }
    });
  }

  static update({
    questionID,
    nameQuestion,
    examID,
    answer,
    correct,
    image,
    userID,
  }) {
    return new Promise(async (resolve) => {
      try {
        if (!ObjectID.isValid(questionID))
          return resolve({ error: true, message: "params_invalid" });

        let dataUpdate = {
          nameQuestion,
          examID,
          answer,
          correct,
          image,
          userUpdate: userID,
        };

        let infoAfterUpdate = await QUESTION_COLL.findByIdAndUpdate(
          questionID,
          dataUpdate,
          { new: true }
        );

        if (!infoAfterUpdate)
          return resolve({ error: true, message: "cannot_update_data" });

        return resolve({
          error: false,
          data: infoAfterUpdate,
          message: "update_data_success",
        });
      } catch (error) {
        return resolve({ error: true, message: error.message });
      }
    });
  }
};
