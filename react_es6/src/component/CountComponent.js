import React from 'react';
import { CountAction } from '../action/CountAction';
import { CountStore } from '../store/CountStore';
import { CountConstants } from '../constants/CountConstants';
import CountButtonComponent from '../component/CountButtonComponent';

export default class CountComponent extends React.Component {
  constructor(props) {
    super(props);
    this._changeState = this._changeState.bind(this);
    this.state = {
      count: CountStore.getCount()
    };
  }
  getInitialState() {
    return this._getState();
  }
  componentDidMount() {
    CountStore.addChangeStateListener(this._changeState);
  }
  componentWiiUnmount() {
    CountStore.removeListener(this._changeState);
  }
  _onChangeUp() {
    CountAction.onChangeUp();
  }
  _onChangeDown() {
    CountAction.onChangeDown();
  }
  _onChangeReset() {
    CountAction.onChangeReset();
  }
  _getState() {
    return {
      count: CountStore.getCount()
    };
  }
  _changeState() {
    this.setState(this._getState());
  }
  render() {
    let stateCount = this.state.count;
    if (
      stateCount != 0 && (stateCount % 3) == 0
      || stateCount.toString().match(/3/)) {
      return (
        <div className="count">
            <h3>にゃ〜</h3>
              <div className="countValue">{this.state.count}</div>
              <CountButtonComponent
        ChangeUp={this._onChangeUp.bind(this)}
        ChangeDown={this._onChangeDown.bind(this)}
        ChangeReset={this._onChangeReset.bind(this)}
        />
          </div>
        );
    } else {
      return (
        <div className="count">
            <h3>Current is ...</h3>
              <div className="stateCount">{this.state.count}</div>
                <CountButtonComponent
        ChangeUp={this._onChangeUp.bind(this)}
        ChangeDown={this._onChangeDown.bind(this)}
        ChangeReset={this._onChangeReset.bind(this)}
        />
          </div>
        );
    }
  }
}
