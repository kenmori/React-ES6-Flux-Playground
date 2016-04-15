import React , {propTypes} from 'react';
import CommentChildComponent  from './CommentChildComponent';
export default class CommentComponent extends React.Component {
  constructor(props){
      super(props);
      this.createItems = this.createItems.bind(this);
      this.getStateFromChild = this.getStateFromChild.bind(this);
      this.state = {
        count : 0
      };
  }

  createItems(items) {
      let output = [];
      for (let i = 0; i < items.length; i++) output.push(<li>{items[i]}</li>);
      return output;
  }
  getStateFromChild(obj){
    obj.count = obj.count + 1;
    console.log(obj);
    this.setState(obj);
  }
  render() {
    let isShowComponent = true;
    let isClass = (isShowComponent ? 'isShow' : '');
    return (
      <div>
        <div className={`fs14 ${isClass}`}></div>
        <div>{<ul>{this.createItems(this.props.items)}</ul>}</div>
        <div>
          {isShowComponent ? <CommentChildComponent count={this.state.count} func={this.getStateFromChild} /> : null}
        </div>
    </div>
    );
  }
};
CommentComponent.defaultProps = {
  data : [],
  items: [1, 2, 3, 4]
};
