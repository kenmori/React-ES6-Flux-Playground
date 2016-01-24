import React from 'react'
import Comment from './Comment'
//When you pass value to children, read children file
export default class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        {/* set attribue 'author, and then pass value' */}
        <Comment author='kenji morita'>This is one comment</Comment>
        <Comment author='takehiro morita'>This is two comment</Comment>
      </div>
    );
  }
}
