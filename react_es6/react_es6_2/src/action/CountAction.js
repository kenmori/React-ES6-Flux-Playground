import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {CountConstants} from '../constants/CountConstants';
import CountStore from '../store/CountStore';


export var CountAction = {
    onChangeUp() {
      AppDispatcher.dispatch({
        actionType: CountConstants.DISPATCH_CHANGE_COUNT
      });
    }
};
