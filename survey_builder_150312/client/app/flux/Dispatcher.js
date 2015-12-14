var Dispatcher = function() {
  this.handlers = [];
  this.isDispatching = false;
  this.pendingPayload = null;
}

//callbackはapp.jsに登録されたfunction
Dispatcher.prototype.register = function(callback) {
  this.handlers.push({
    isPending: false,
    isHandled: false,
    callback: callback
  });
};
//function(payload){
// switch(payload.actionType) {
//   case SurveyConstants.SAVE_SURVEY:
//     SurveyStore.saveSurvey(payload.survey);
//     break;
//
//   case SurveyConstants.DELETE_SURVEY:
//     SurveyStore.deleteSurvey(payload.id)
//     break;
//
//   case SurveyConstants.RECORD_SURVEY:
//     SurveyStore.recordSurvey(payload.results);
//     break;
//  }
// }
//
//
//         handler.callback(payload);で実行される


Dispatcher.prototype.dispatch = function(payload) {
  if (this.isDispatching) {
    throw new Error("Cannot dispatch in the middle of a dispatch!");
  }

  // Initialize states to begin the dispatch
  this.handlers.forEach(function(handler) {
    handler.isPending = false;
    handler.isHandled = false;
  });

  this.pendingPayload = payload;
  this.isDispatching = true;

  try {
    // Invoke the handler callbacks
    this.handlers.forEach(function(handler) {
      if (!handler.isPending) {
        handler.isPending = true;
        handler.callback(payload);
        handler.isHandled = true;
      }
    })
  } finally {
    // Clean up after the dispatch
    this.pendingPayload = null;
    this.isDispatching = false;
  }
};

// The Dispatcher is a singleton, so export only the one instance.
module.exports = new Dispatcher();
