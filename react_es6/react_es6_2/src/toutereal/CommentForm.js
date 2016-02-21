"use strict";

import React  from 'react';

export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let author = React.findDOMNode(this.refs.author).value.trim();
    let text   = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value   = '';
    return;
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
