import React from 'react';
import GrandsonComponent from './GrandsonComponent.js';

export default class ChildComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  // getDefaultProps(){
  //   return {
  //     name: 'keiko'
  //   };
  // }
  render(){
    let renderTypeView = this.props.renderType == 2 ? this.props.user.id.toString() : '';
    return (
      <div>
        <h3>I'm ChildrenComponent{this.props.renderType}</h3>
          <p>renderType is {this.props.renderType}</p>
          {/*<div>{this.getDefaultProps()}</div>*/}
          <div>{this.props.name}</div>
          <div>{renderTypeView}</div>
          <div>{this.props.user.age.toString()}</div>
          <GrandsonComponent renderType={this.props.renderType} {...this.props} />
          <GrandsonComponent renderType={this.props.renderType} />
      </div>
    );
  }
}
