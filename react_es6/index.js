import React from 'react'
class CommentBox extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList />
        <CommentFrom />
      </div>
    );
  }
}
class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        Hello, world I am a CommentList.on
      </div>
    );
  }
}

class CommentFrom extends React.Component {
  render() {
    return (
      <div className='commentForm'>
        Hello, World I am a CommentForm.
      </div>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
