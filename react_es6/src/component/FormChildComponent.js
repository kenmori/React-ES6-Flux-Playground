import React from 'react';
export default class FormChild extends React.component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>{this.props.index}</div>
    );
  }
}
