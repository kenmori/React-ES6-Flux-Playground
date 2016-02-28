"use strict";

import React from 'react';
import $ from 'jquery';
import CountComponent from './component/CountComponent';

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
