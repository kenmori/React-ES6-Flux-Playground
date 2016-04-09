import React from 'react';
import {render} from 'react-dom';
import ChildComponent from './ChildComponent';
import FormParentComponent from './FormParentComponent.js';

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
      name: 'kenji'
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
        id: 10,
        age: 22
      };
      return  (
        <div>
          <div className={`ratewrap${this.state.id} iii`}>
            {
              
            }
            <p className='rate'>1</p>
            <p className='rate'>2</p>
            <p className='rate'>3</p>
            <p className='rate'>4</p>
            <p className='rate'>5</p>
            { this.state.id == 10 ? <div>eee</div> : ''}
          </div>
          <div>
            <FormParentComponent
              renderType={this.state.renderType}
              func={this._changeStateClick} />
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
