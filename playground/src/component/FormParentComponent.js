import React from 'react';
import FormChildComponent from './FormChildComponent.js';
import AnswerRadioInput from './AnswerRadioInput';
import AddList from './AddList';
import CommentComponent from './CommentComponent';
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
    return(
        <div>
        <FormChildComponent num={1} />

          <h2>ここから下調整中(2016/0702)</h2>
              <hr />
          <AddList
            addCountToParent={this.addCountFromParent} />
            <hr />

          <h2>【WIP】Register form</h2>
      count={this.state.count} />
          <form>
          <label name='name' value='名前' />
          <CommentComponent data={this.props.data} />
          <input
      ref='name' />
          <p>{this.state.name}</p>
      onChange={this._getName}
      type='text'
                   name='name'
          <label name='age' value='生年月日' />
          <input type='text' name='age' ref='age' />
          <select name='country' id='contry'>
          </select>
          {/*<div
               onDragOver={this.handleDragOver}
               onDragEnter={this.handleDragEnter}
               onDragLeave={this.handleDragLeave}
               onDrop={this.handleDrop}
               >
               </div>*/}
          <AnswerRadioInput />
          <button className='btn btn-primary' onClick={this.handleSaveClicked}>保存</button>
          </form>
        </div>
    );
  }
};

FormParentComponent.defaultProps = {
  data : [
    { name: 'kenji', coment : 'hi!' },
    {name: 'keiko', comment: 'yha'}
  ]
};
