import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ReactCSSTransitionGroupExample extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        items: ['掃除', '食事', '勉強', '遊び']
      };
  }
  _handleAdd = ()=> {
    let newItems = this.state.items.concat([prompt('inputtext!')]);
    this.setState({
      items: newItems
    });
  }
  _handleRemove = (i)=> {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  render(){
    var items = this.state.items.map(function(item, i){
      return (
        <div key={item} onClick={this._handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <h3>ReactCSSTransitionGroupのsample</h3>
        <ul>
          <li>add押下、テキストを入力します</li>
          <li>追加された箇所をClickすると消えます</li>
          <li>出現時と削除時にanimationすることを確認してください</li>
        </ul>
        <button onClick={this._handleAdd}>add</button>
        <p>今日やること</p>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
        {items}
      </ReactCSSTransitionGroup>
      <hr />
      </div>);
  }
};
