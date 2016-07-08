import React from 'react';
import ReactDOM from 'react-dom';

export default class ChildrenComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>ReactChild</h2>
                <Component>
                    <li>0</li>
                    <li>1</li>
                </Component>
            </div>
        )
    }
}
var obj = {
    num : 3
};

var Component = React.createClass({
    render: function(){
        React.Children.forEach(this.props.children, function(){
            console.log(this);
        }, this.props.children);
        return (
                <div>
                    component!here!
                    <ul>{this.props.children}</ul>
                </div>
        )
    }
})