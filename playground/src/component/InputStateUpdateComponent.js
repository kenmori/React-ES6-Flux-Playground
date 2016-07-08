import React from 'react';
import ReactDOM from 'react-dom';

export default class InputStateUpdateComponent extends React.Component {
    constructor(props){
        super(props);
        this._onclickforcus = this._onclickforcus.bind(this);
        this.state = {
          text: ''
        };
    }
    componentDidMound(){
        this.refText.focus();
    }
    _onclickforcus(){
        this.setState(function(state,props){
            return {
                text : this.refText.value
            }
        });
    }
    render(){
        return (
            <div>
                <h2>InputStateUpdateComponent</h2>
                <input type='text' ref={(ref)=> this.refText = ref} />
                <input type='button' onClick={this._onclickforcus} value='focus' />
                  <p>stateの状態: {this.state.text}</p>
            </div>
        )
    }
}
