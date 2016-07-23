import  React from 'react';
import  update from 'react-addons-update';
export default class AddCount extends React.Component {
    constructor(props){
      super(props);
        this.state = {
            value : 2
        }
      this.addCount = this.addCount.bind(this);
    }
    addCount(){
        this.props.addCountToParent(this.props.count);
    }

    render(){
      return (
        <div>
          <h2>add count in child Component,
            and then receive props to parent</h2>
          <ul>
            <li>addを押してください。contが3の倍数だったらclass(colorを赤)に"three"を付与します</li>
            <li>内部的にはaddする度、親が状態管理しています。子のイベントを親がハンドリングしています</li>
          </ul>
          <p className={this.props.count % 3 == 0 && this.props.count !== 0 && 'three'}>{this.props.count}</p>
          <button className='btn btn-primary' onClick={this.addCount}>add</button>
            <h2>use update by react-addons-updates</h2>
        <div>{this.state.value}</div>
            <button>add</button>
        </div>

      );
    }
};
// AddList.propTypes = {
//   addCountToParent : React.propTypes.func.isRequired,
//   count: React.propTypes.number
// };
AddCount.defaultProps = {
    AddCount: null
};
