"use strict";

import React  from 'react';
import {CountAction} from '../action/CountAction'
import {CountStore} from '../store/CountStore'
import {CountConstants} from '../constants/CountConstants';

export default class Count extends React.Component {
  constructor(props){
    super(props);
    this._onChangeUp = this._onChangeUp.bind(this);
    this._changeState = this._changeState.bind(this);
    this.state = {
      count : 0
    }
  }
  getInitialState(){
    return _getState();
  }
  componentDidMount(){
    CountStore.addChangeStateListener(this._changeState);
    CountAction.onChangeUp();
  }
  componentWiiUnmount(){
    CountStore.removeListener(this._changeState)
  }
  _onChangeUp(){
    CountAction.onChangeUp();
  }
  _getState(){
    return {
      count : CountStore.getItems()
    }
  }
  _changeState() {
    this.setState(this._getState());
  }
  render() {
    return (
      <div className="count">
        <h3>Push Up Down</h3>
        <div>{this._getState.bind(this)}</div>
        <button onClick={this._onChangeUp.bind(this)}>up</button>
      </div>
    );
  }
}
