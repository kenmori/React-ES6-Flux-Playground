"use strict";

import React  from 'react';
import $      from 'jquery';
import marked from 'marked';
import CommentForm from './toutereal/CommentForm';

export default class Hello extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    return(
      <div>iie</div>
    );
  }
}
React.render(
  <Hello/>,
  document.getElementById('content')
);
