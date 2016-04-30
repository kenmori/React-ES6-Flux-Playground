import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent';

export default class TodoList
extends React.Component {
  constructor(props){
      super(props);
  }
  onClick(){
    console.log(request);
    request.get('http://localhost:3004/users')
    .end(function (error, res){
      console.log(res);
    });
  }
  render(){
    return (
      <div>
        <h3>TodoList</h3>
        <a onClick={this.onClick.bind(this)}>click</a>
        <hr />
      </div>
    );
  }
};
