import React from 'react';
import ReactDOM from 'react-dom';

export default class defaultClassComponent  extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>defaultParent</h2>
            </div>
        )
    }
}
