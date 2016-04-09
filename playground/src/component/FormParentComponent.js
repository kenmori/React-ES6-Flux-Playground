import React from 'react';
import FormChildComponent from './FormChildComponent.js';
export default class FormParentComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name : '',
        age : null,
        country: ''
      };
      this._getName = this._getName.bind(this);
  }
  _getName(e) {
    this.setState({
      name : e.target.value
    });
  }
  render() {
      {(()=>{

      })();}
    return(
        <div>
          <h3>Register form</h3>
          <form action="GET">
              <label name="name" value="名前" />
                <input
                   onChange={this._getName}
                   type="text"
                   name="name"
                   ref="name"/>
                <p>{this.state.name}</p>
              <label name="age" value="生年月日" />
                <input type="text" name="age" ref="age" />
              <select name="country" id="contry">
              </select>
              <div>
              </div>
              <button type="submit">送信</button>
          </form>
          <FormChildComponent num={1} />
        </div>
    );
  }
};
