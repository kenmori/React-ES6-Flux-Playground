/**
 * Created by No51 on 2016/07/03.
 */

import React, {Component} from 'react';
import AnswerRadioInput from './AnswerRadioInput';
import AddCount from './Addcount';
import CommentComponent from './CommentComponent';

export default class WipComponent extends Component {
    constructor(props){
        super(props);
        this._getName = this._getName.bind(this);
        this.state = {
            name : 'kenji',
            age : null,
            country: '',
            dropZoneEntered: false
        }
    }

    _getName(e) {
        this.setState({
            name : e.target.value
        });
    }
    render(){
        return (
            <div>
            <h2>WIP(2016/0704)</h2>
            <h2>Register form</h2>
            <form>
            <label name='name' value='名前' />
                <CommentComponent data={this.props.data} />
                <input className='form-control' ref='name' onChange={this._getName} type='text' name='name'/>
                <p>{this.state.name}</p>
                <label name='age' value='生年月日' />
            <input className='form-control' type='text' name='age' ref='age' />
            <select name='country' id='contry'>
            </select>
            {/*<div
             onDragOver={this.handleDragOver}
             onDragEnter={this.handleDragEnter}
             onDragLeave={this.handleDragLeave}
             onDrop={this.handleDrop}
             >
             </div>*/}
            <AnswerRadioInput />
            <button className='btn btn-primary' onClick={this.handleSaveClicked}>保存</button>
        </form>
        <AddCount addCountToParent={this.addCountFromParent} count={this.state.count} />
    </div>
        )
    }
}

WipComponent.defaultProps = {
    data : [
        { name: 'kenji', coment : 'hi!' },
        {name: 'keiko', comment: 'yha'}
    ]
};