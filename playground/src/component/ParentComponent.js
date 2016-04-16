import React from 'react';
import {render} from 'react-dom';
import ChildComponent from './ChildComponent';
import FormParentComponent from './FormParentComponent';
import InputValidation from './InputValidation';
import TodoComponent from './TodoComponent';
import ReactCSSTransitionGroupExample from './ReactCSSTransitionGroupExample';
// import ReactCSSTransitionGroupImageCarousel from
// './ReactCSSTransitionGroupImageCarousel';
import CreateFragmentComponent from './CreateFragmentComponent';

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'morita',
      renderType: null,
      id: 10
    };
    // console.log(this._click.bind(this))
    // console.log(this._click)
    this._click = this._click.bind(this);
    this._changeStateClick = this._changeStateClick.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReciveProps');
  }
  shouldComponentUpdate(nextProps, nextState, context) {
    console.log(nextState);
    console.log(this.state.name);
    console.log(context);
    if(nextState.name == 'kenji'){
      return true;
    } else {
      return false;
    }
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWiiUnmount() {
    console.log('componentWiiUnmount');
  }
  _click() {
    this.setState({
      name: 'kenji',
      swapped: false
    });
  }
  _changeStateClick(addCount) {
    this.setState({
      renderType: addCount
    });
  }
  render() {
      //オブジェクトをprops経由で渡す
      let user = {
        id: 3,
        age: 22
      };
      //spread Attribute;
      let props = {};
      props.swapped=true;
      props.text='default';
      props.rightChildren=<Right />;
      props.leftChildren=<Left />;
      // const map = ['待機中','鑑定中', '予約受付中', '時間外'];
      return  (
        <div>
          {/*<div className={`ratewrap${this.state.id} iii`}>
            <p className='rate'>{`${map[this.state.id]}`}</p>
            { this.state.id == 10 ? <div>eee</div> : ''}
          </div>*/}
          <InputValidation />
          <ReactCSSTransitionGroupExample />
          {/*<ReactCSSTransitionGroupImageCarousel />*/}
          <CreateFragmentComponent
            {...props} text={'override'}
          />
          <TodoComponent />
          <div>
            <FormParentComponent
              renderType={this.state.renderType}
               func={this._changeStateClick}
             />
            <h2>I'm ParentComponent</h2>
            <ChildComponent user={user} name={this.state.name} renderType={1} />
            <hr />
            <ChildComponent user={user} name={this.state.name} renderType={2} />
          </div>
          <button onClick={this._click}>push</button>
        </div>
      );
    }
  };
  let Right = React.createClass({
      render(){
        return (
          <div>right</div>
        );
      }
  });
  let Left = React.createClass({
    render(){
      return (
        <div>left</div>
      );
    }
  });
