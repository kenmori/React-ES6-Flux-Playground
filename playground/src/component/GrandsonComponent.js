import React from 'react';

export default class GrandsonComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  defaultProps(){
    return {
      name: 'keiko'
    };
  }
  render (){
    return (
        <div>
          <h4>I'm GrandsonComponent {this.props.renderType}</h4>
            <div>
              {this.props.name}
            </div>
        </div>
    );
  }
}
//ES6 defaultProps, See above ,
//'getDefaultProps' method is doesn't work,
//because this is  not classlike writing
GrandsonComponent.defaultProps = {
  name: 'keiko'
};
