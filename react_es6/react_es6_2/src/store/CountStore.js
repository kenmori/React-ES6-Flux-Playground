import EventEmitter from './EventEmitter';
import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {CountConstants} from '../constants/CountConstants';

class Store extends EventEmitter{
    constructor(props){
      super(props);
        this.count = 0;
        this.countUp;
    }
    emitChangeState() {
      this.emit(CountConstants.DISPATCH_CHANGE_STATE);
    }
    addChangeStateListener(callback) {
      this.on(CountConstants.DISPATCH_CHANGE_STATE, callback)
    }
    removeChangeStateListener(callback){
      this.removeListener(CountConstants.DISPATCH_CHANGE_STATE, callback)
    }
}

export var CountStore = new Store();
CountStore.countUp = () => {
  CountStore.count = CountStore.count + 1;
  return CountStore.count;
}

AppDispatcher.register((action) => {
	switch (action.actionType) {
		case CountConstants.DISPATCH_CHANGE_COUNT:
			CountStore.emitChangeState();
			break;
	}
});
