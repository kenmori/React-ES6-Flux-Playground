import  React from 'react';

export default class AddList extends React.Component {
    constructor(props){
      super(props);
      this.addCount = this.addCount.bind(this);
    }
    addCount(){
        this.props.addCountToParent(this.props.count);
    }
    render(){
      return (
        <div>
          <p className={this.props.count == 5 && 'five'}>{this.props.count}</p>
          <button onClick={this.addCount}>add</button>
        </div>
      );
    }
};
// AddList.propTypes = {
//   addCountToParent : React.propTypes.func.isRequired,
//   count: React.propTypes.number
// };
AddList.defaultProps = {
  count: null
};
