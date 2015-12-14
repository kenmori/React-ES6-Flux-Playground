var Dispatcher = require("./Dispatcher");
var SurveyConstants = require("./SurveyConstants");

var SurveyActions = {//actionを発行するための関数の保持
  save: function(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SAVE_SURVEY,
      survey: survey //view of title, introduction, question
    });
  },

  delete: function(id) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.DELETE_SURVEY,
      id: id
    });
  },

  record: function(results) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.RECORD_SURVEY,
      results: results
    });
  }
}

module.exports = SurveyActions;
