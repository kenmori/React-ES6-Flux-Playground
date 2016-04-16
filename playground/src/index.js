import React from 'react';
import ReactDOM  from 'react-dom';
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
ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
