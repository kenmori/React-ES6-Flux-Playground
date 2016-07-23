import React from 'react';
import ReactDOM from 'react-dom';

export default class ButtonComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            on: false
        };
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton(){
        this.setState({
            on: !this.state.on
        });
    }
    render(){
        const buttonClass = this.state.on ?  'offButton' : 'onButton' ;
        return (
            <div>
            <h2>ButtonComponent</h2>
                <div className='wrapButton'><button className={buttonClass}  onClick={this.onClickButton}>click</button></div>
                <div>{this.state.on}</div>
        </div>
    )
    }
}

