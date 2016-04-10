import React , {propTypes} from 'react';
import CommentChildComponent  from './CommentChildComponent';
export default class CommentComponent extends React.Component {
  constructor(props){
      super(props);
      this.createItems = this.createItems.bind(this);
  }

  createItems(items) {
      let output = [];
      for (let i = 0; i < items.length; i++) output.push(<li>{items[i]}</li>);
      return output;
  }
  render() {
    // TODO:this.props.dataを受けてlistの描画
    // var lists = this.props.data.forEach((data,index) => {
    //     return (
    //       <div>{data[index]}</div>
    //   );
    // });
    let isShowComponent = true;
    return (
      <div>
        <div>{<ul>{this.createItems(this.props.items)}</ul>}</div>
        <div>
          {isShowComponent ? <CommentChildComponent /> : null}
        </div>
    </div>
    );
  }
};
CommentComponent.defaultProps = {
  data : [],
  items: [1, 2, 3, 4]
};
