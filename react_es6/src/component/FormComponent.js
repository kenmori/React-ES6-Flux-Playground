import React from 'react';
import immutable from 'immutable';
import FormChild from 'FormChildComponent';

export class FormComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let countFn = function (n) {
        return <FormChild index={n} />;
    };
    let Array = immutable.Range(0, 10).toArray();
    let ele = Array.map(countFn);
    return (<div>{ele}</div>);
  }
}
;
