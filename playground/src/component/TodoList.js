import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent';

export default class TodoList
extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        title: []
      };
  }
  componentDidMount() {

  }
  onClickGet(){
    const title = request
    .get('http://localhost:3004/posts/', function (error, res){
      return res.body.map(function (elem, i){
          elem.title;
      });
    });
    this.setState({
      title : title
    });
  }
  onClickPost(){
    request.post('http://localhost:3004/posts/', function (error, res){

    });
  }
  render(){
    return (
      <div>
        <h3>TodoList</h3>

        <a onClick={this.onClickGet.bind(this)}>click</a>
        <a onClick={this.onClickPost.bind(this)}>click</a>
        <hr />
      </div>
    );
  }
};

//TODO: via to ActionCreator
// const lists = React.createClass({
//   render: function () {
//     let list = [];
//     console.log("hogehoge");
//     request.get('http://localhost:3004/posts')
//     .end(function (error, res){
//       list = res.map(function (ele){
//          <li>{ele.title}</li>;
//       });
//     });
//     return (
//       <li>{list}</li>
//     );
//   }
// });
