import {BaseConstants} from './BaseConstants';

export class CountConstants extends BaseConstants {
	constructor(props){
		super(props);
		this.DISPATCH_CHANGE_COUNT = 'count_change_up'
		this.DISPATCH_CHANGE_STATE = 'count_change_state'
	}
}
