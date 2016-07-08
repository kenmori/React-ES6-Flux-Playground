import React from 'react';
import ReactDOM from 'react-dom';

export default class CommunicateBetweenChildComponents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          value: 0
        };
        this.add = this.add.bind(this);
    }
    add = ()=>{
      this.setState(function (state, props){
          return {
            value : state.value + 1
          }
      })
    }
    render(){
        return (
            <div>
                <h3>CommunicateBetweenChildComponents</h3>
                {this.state.value}
            </div>
        )
    }
}
