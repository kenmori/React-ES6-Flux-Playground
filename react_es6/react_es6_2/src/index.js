import React from 'react';
import $ from 'jquery';
import CountComponent from './component/CountComponent';
import FormComponent from './component/FormComponent';

export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        {/*<CountComponent />*/}
        <FormComponent />
      </div>
      );
  }
}
React.render(
  <HelloReact />,
  document.getElementById('content')
);
