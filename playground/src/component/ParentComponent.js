import React from 'react';

export default class CountComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props, this)
    this.state = {
      name: "morita"
    };
    // console.log(this._click.bind(this))
    // console.log(this._click)
    this._click = this._click.bind(this);
  }
  getDefaoultProps (){
    console.log("getDefaoultProps");
  }
  getInitialState () {
    console.log("getInitialState");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps (){
    console.log("componentWillReciveProps");
  }
  shouldComponentUpdate (nextProps, nextState, context){
    console.log(nextState)
    console.log(this.state.name);
    console.log(context)
    if(nextState.name == "kenji"){
      return true;
    } else {
      return false;
    }
  }
  componentWillUpdate (){
    console.log("componentWillUpdate");
  }
  componentDidUpdate (){
    console.log("componentDidUpdate");
  }
  componentWiiUnmount() {
    console.log("componentWiiUnmount");
  }
  _click() {
    this.setState({
      name: "kenji"
    });
  }
  render() {
      return  (
        <div>
          <div>
            {this.state.name}
          </div>
          <button onClick={this._click}>push</button>
        </div>
      );
    }
  }
