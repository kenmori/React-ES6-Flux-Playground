import React from 'react';
import ReactDOM from 'react-dom';
import CommunicateBetweenChildComponents from './CommunicateBetweenChildComponents';

export default class CommunicateBetweenComponents extends React.Component {
    constructor(props){
        super(props);
        this._callref = this._callref.bind(this);
    }
    _callref(){
      this.refs.child.add();
    }
    render(){
        return (
            <div>
                <hr />
                <h2>CommunicateBetweenComponents</h2>
                <p>ボタンを押してください。親から子供のメソッドを呼んでいます。子コンポーネント内だけでstateの変更をしています</p>
                <button className='btn btn-primary' onClick={this._callref}>child ref call</button>
                <CommunicateBetweenChildComponents ref='child'/>
            </div>
        )
    }
}
