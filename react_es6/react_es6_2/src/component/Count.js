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

      if( this.state.count != 0 && (this.state.count % 3) == 0 || this.state.count.toString().match(/3/) ){
        return (
          <div className="count">
            <h3>3 multiples or include 3 string</h3>
            <div>{this.state.count}</div>
              <button onClick={this._onChangeUp}>up</button>
              <button onClick={this._onChangeDown}>down</button>
              <button onClick={this._onChangeReset}>reset</button>
          </div>
        )
      }else {
        return (
          <div className="count">
            <h3>Current is ...</h3>
            <div>{this.state.count}</div>
              <button onClick={this._onChangeUp}>up</button>
              <button onClick={this._onChangeDown}>down</button>
              <button onClick={this._onChangeReset}>reset</button>
          </div>
        );
      }
  }
}
