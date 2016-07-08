import React from 'react';
import FormChildComponent from './FormChildComponent.js';

export default class FormParentComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        count: 0
      };
      this.addCountFromParent = this.addCountFromParent.bind(this);
  }

  shouldComponentUpdate(){
    return true;
  }
  addCountFromParent(value){
    this.setState({
      count : value + 1
    });
  }
  render() {
    return(
        <div>
            <FormChildComponent num={1} />
        </div>
    );
  }
};
