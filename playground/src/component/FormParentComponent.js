import React from 'react';

export default class FormParentComponent extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
      {(()=>{
      if(this.props.renderType === 0) {
          return(
              <p className='mt5 tagStatus'>
                <span className='gray1 fs11'>時間外</span>
              </p>
          );
      } else if(this.props.renderType === 1) {
          return(
              <p className='mt5 tagStatus type1 center'>
                <span className='white fs11'>待機中</span>
              </p>
          );
      } else if(this.props.renderType === 2) {
          return(
              <p className='mt5 tagStatus type2 center'>
                <span className='white fs11'>鑑定中</span>
              </p>
          );
      } else if(this.props.renderType === 3) {
          return(
              <p className='mt5 tagStatus type3 center'>
                <span className='white fs11'>予約受付中</span>
              </p>
          );
      }
    })();
    }
    return(
        <div>
          <button onClick={this.props.func}>add</button>
        </div>
    );
  }
};
