import EventEmitter from 'lib/events';
import {BaseConstants} from 'constants/BaseConstants';

export class BaseStore extends EventEmitter {

	constructor() {
		this.state = {};
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
