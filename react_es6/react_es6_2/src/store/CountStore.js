import {BaseStore} from './BaseStore';
import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {CountConstants} from '../constants/CountConstants';

export class Store extends BaseStore{
    constructor(props){
      super(props);
        this.state = {
          count : 0
        }
    }
    emitChangeState() {
      console.log(this)
      this.emit(CountConstants.DISPATCH_CHANGE_COUNT);
    }
    addChangeStateListener(callback) {
      this.on(CountConstants.DISPATCH_CHANGE_COUNT, callback)
    }
    removeChangeStateListener(callback){
      this.removeListener(CountConstants.DISPATCH_CHANGE_COUNT, callback)
    }
    getItems() {
      return {
        count : 1
      }
    }
}
export var CountStore = new Store();

//TODO
var _countUp = () => {
	CountStore.state.count += 1 ;
};

AppDispatcher.register((action) => {
	switch (action.actionType) {
		case CountConstants.DISPATCH_CHANGE_COUNT:
			_countUp();
      console.log('up')
			CountStore.emitChangeState();
			break;
  }
});
