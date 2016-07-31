import EventEmitter from './EventEmitter';
import {BaseConstants} from '../constants/BaseConstants';

export class BaseStore extends EventEmitter {

	constructor(props) {
		super(props);
	}

	emitChangeState(key) {
		this.emit(key);
	}

	addChangeStateListener(key, callback) {
		this.on(key, callback);
	}

	removeChangeStateListener(key, callback) {
		this.removeListener(key, callback);
	}

  getState() {
      return this.state;
  }
}
