"use strict";

import React from 'react';
import $ from 'jquery';
import marked from 'marked';
import Count from './component/Count';

export default class HelloReact extends React.Component {
  constructor(props){
      super(props);
      this.countUp = this._onCountUp.bind(this);
      this.countDown = this._onCountDown.bind(this);
      this.reset = this._onReset.bind(this);
      this.state = {
        count: 0
      }
  }

  _onCountUp(){
    let count = this.state.count += 1;
    this.setState({count : count});
  }
  _onCountDown(){
    let count = this.state.count -= 1;
    this.setState({count : count});
  }
  _onReset(){
    let count = this.state.count = 0;
    this.setState({count : count});
  }
  render(){
    return(
      <div>
        <Count
         count={this.state.count}
         countUp={this._onCountUp.bind(this)}
         countDown={this._onCountDown.bind(this)}
         reset={this._onReset.bind(this)}
          />
      </div>
    );
  }
}
React.render(
  <HelloReact />,
  document.getElementById('content')
);
