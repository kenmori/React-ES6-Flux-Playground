import  React from 'react';

export default class AddList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          count : 0
      };
      this.addCount = this.addCount.bind(this);
    }
    addCount(){
        let update = this.state.count + 1;
        this.setState({
          count: update
        });
    }

    render(){
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.addCount}>add</button>
        </div>
      );
    }

};
