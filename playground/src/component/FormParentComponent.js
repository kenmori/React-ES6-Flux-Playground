import React from 'react';
import FormChildComponent from './FormChildComponent.js';
import AnswerRadioInput from './AnswerRadioInput';
import AddList from './AddList';
export default class FormParentComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name : '',
        age : null,
        country: '',
        dropZoneEntered: false,
        count: 0
      };
      this._getName = this._getName.bind(this);
      this.addCountFromParent = this.addCountFromParent.bind(this);
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  _getName(e) {
    this.setState({
      name : e.target.value
    });
  }
  // handleSaveClicked() {
  //
  // }
  // handleDragOver(ev) {
  //   ev.preventDefault();
  // }
  // handleDragEnter(){
  //   this.setState({
  //     dropZoneEntered: true
  //   });
  // }
  // handleDragLeave(){
  //   this.setState({
  //     dropZoneEntered: false
  //   })
  // }
  // handleDrop(){
  //
  // }
  addCountFromParent(value){
    this.setState({
      count : value + 1
    });
  }
  render() {
      {(()=>{

      })();}
    return(
        <div>
          <h3>add count in child Component, and then receive props to parent</h3>
          <AddList addCountToParent={this.addCountFromParent} count={this.state.count} />
          <h3>Register form</h3>
          <form>
              <label name="name" value="名前" />
                <input
                   onChange={this._getName}
                   type="text"
                   name="name"
                   ref="name" />
                <p>{this.state.name}</p>
              <label name="age" value="生年月日" />
                <input type="text" name="age" ref="age" />
              <select name="country" id="contry">
              </select>
              {/*<div
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                >
              </div>*/}
              <AnswerRadioInput />
              <button onClick={this.handleSaveClicked}>保存</button>
          </form>
          <FormChildComponent num={1} />
        </div>
    );
  }
};
