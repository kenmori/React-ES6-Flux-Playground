import EventEmitter from './EventEmitter';
import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {CountConstants} from '../constants/CountConstants';

class Store extends EventEmitter{
    constructor(props){
      super(props);
        this.count = 0;
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
    countUp(){
      this.count = this.count + 1;
    }
    countDown(){
      this.count = this.count - 1;
    }
    getCount(){
      return this.count;
    }
    countReset() {
      this.count = 0;
    }
}
export var CountStore = new Store();

AppDispatcher.register((action) => {
	switch (action.actionType) {
		case CountConstants.DISPATCH_CHANGE_UP:
      CountStore.countUp();
			CountStore.emitChangeState();
			break;
    case CountConstants.DISPATCH_CHANGE_DOWN:
      CountStore.countDown();
      CountStore.emitChangeState();
      break;
    case CountConstants.DISPATCH_CHANGE_RESET:
      CountStore.countReset();
      CountStore.emitChangeState();
      break;
	}
});
