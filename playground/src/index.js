import React from 'react';
import $ from 'jquery';
import ParentComponent from './component/ParentComponent';

export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <ParentComponent />
      </div>
      );
  }
}
React.render(
  <HelloReact />,
  document.getElementById('content')
);
