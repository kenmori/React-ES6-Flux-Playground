"use strict";

import React  from 'react';

export default class Count extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="count">
        <h3>Push Up Down</h3>
        <div>{this.props.count}</div>
        <button onClick={this.props.countUp}>Up</button>
        <button onClick={this.props.countDown}>Down</button>
        <button onClick={this.props.reset}>reset</button>
      </div>
    );
  }
}
