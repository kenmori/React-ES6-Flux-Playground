"use strict";

import React  from 'react';
import {CountAction} from '../action/CountAction'
import {CountStore} from '../store/CountStore'
import {CountConstants} from '../constants/CountConstants';

export default class CountComponent extends React.Component {
  constructor(props){
    super(props);
    this._changeState = this._changeState.bind(this);
    this.state = {
      count : CountStore.getCount()
    }
  }
  getInitialState(){
    return this._getState();
  }
  componentDidMount(){
    CountStore.addChangeStateListener(this._changeState);
  }
  componentWiiUnmount(){
    CountStore.removeListener(this._changeState)
  }
  _onChangeUp(){
    CountAction.onChangeUp();
  }
  _onChangeDown(){
    CountAction.onChangeDown();
  }
  _onChangeReset(){
    CountAction.onChangeReset();
  }
  _getState(){
    return {
      count : CountStore.getCount()
    }
  }
  _changeState() {
    this.setState(this._getState());
  }
  render() {
    return (
      <div className="count">
        <h3>Push Up Down Reset</h3>
        <div>{this.state.count}</div>
          <button onClick={this._onChangeUp}>up</button>
          <button onClick={this._onChangeDown}>down</button>
          <button onClick={this._onChangeReset}>reset</button>
      </div>
    );
  }
}
