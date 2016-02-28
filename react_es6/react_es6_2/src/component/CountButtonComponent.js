"use strict"

import React from 'react';

export default class CountButtonComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary" onClick={this.props.ChangeUp}>up</button>
          <button className="btn btn-primary" onClick={this.props.ChangeDown}>down</button>
          <button className="btn btn-primary" onClick={this.props.ChangeReset}>reset</button>
        </div>
      </div>
    );
  }
}
