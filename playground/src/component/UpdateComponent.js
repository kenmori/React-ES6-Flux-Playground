import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

export default class UpdateComponent
extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    let initalArray = [1, 2, 3];
    let newArray = update(initalArray, {$push: [4]});//[1, 2, 3, 4];
    //initalArray is still [1, 2, 3];
    return (
      <div>

          <hr />
      </div>
    );
  }
};
