import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TabContaner from './TabContaner';

export default class TabComponent
extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        num: 0
      };
  }
  onClick(num){
    this.setState({
      num : num
    });
  }
  render(){
    return (
      <div>
        <h2>TabComponent</h2>
        <p>簡易的なタブUIです。各カテゴリーを押下すると内容が変わることを確認してください</p>
        <ul>
          <li><a onClick={this.onClick.bind(this, 0)}>ニュース</a></li>
          <li><a onClick={this.onClick.bind(this, 1)}>スポーツ</a></li>
          <li><a onClick={this.onClick.bind(this, 2)}>芸能</a></li>
        </ul>
        <TabContaner num={this.state.num}/>
        <hr />
      </div>);
  }
};
