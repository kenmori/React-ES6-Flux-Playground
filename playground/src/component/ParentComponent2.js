import React from 'react';

export default class ParentComponent2 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                iiiiiiiiiii
            {console.log(this.props.children, "pppp")}
            </div>
        )
    }
}
