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
        <p>It is a simple tab UI.Please make sure that the content is changed when the user presses each category</p>
        <p>簡易的なタブUIです。各カテゴリーを押下すると内容が変わることを確認してください</p>
        <ul className='flex lsn'>
          <li><button className='btn btn-primary m10 block' onClick={this.onClick.bind(this, 0)}>ニュース</button></li>
          <li><button className='btn btn-primary m10 block' onClick={this.onClick.bind(this, 1)}>スポーツ</button></li>
          <li><button className='btn btn-primary m10 block' onClick={this.onClick.bind(this, 2)}>芸能</button></li>
        </ul>
        <TabContaner num={this.state.num}/>
        <hr />
      </div>);
  }
};
