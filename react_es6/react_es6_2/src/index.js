"use strict";

import React from 'react';
import $ from 'jquery';
import marked from 'marked';
import Count from './component/Count';

export default class HelloReact extends React.Component {
  render(){
    return(
      <div>
        <Count />
      </div>
    );
  }
}
React.render(
  <HelloReact />,
  document.getElementById('content')
);
