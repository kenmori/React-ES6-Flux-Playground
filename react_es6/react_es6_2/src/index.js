"use strict";

import React from 'react';
import $ from 'jquery';
import marked from 'marked';
import CountComponent from './component/Count';

export default class HelloReact extends React.Component {
  render(){
    return(
      <div>
        <CountComponent />
      </div>
    );
  }
}
React.render(
  <HelloReact />,
  document.getElementById('content')
);
