import React from 'react';
import ParentComponent2 from './ParentComponent2';
import ChildComponent2 from './ChildComponent2';

export default class ListComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const array = ['a', 'b', 'c'];
        const list = this.props.data.map(function(elem, i){
                return <li>{elem}</li>;
            });
        return (
            <div>
                <h2>ListComponent</h2>
                <p>リストの要素をliタグを付けて返しています</p>
                <ul>{list}</ul>
                <div>{Child}</div>
                <div>{itemChild}</div>
                親の上
                <ParentComponent2>
                {transfor()}
                </ParentComponent2>
                親の下
            </div>
        )
    }
}

const transfor = (ChildComponent2)=>({
    type: 'div',
    props: {
        children: ChildComponent2
    }
})

ListComponent.defaultProps = {
    data : ['data1', 'data2', 'data3']
};
// let items = this.props.data.map(item => <span>{item}</span>);
let Child = React.createElement('span', null, 'わたしです');
let itemChild = React.createElement('span', null, Child);