import React from 'react'

export default class CommentForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).vale.trim();
    if(!text || !author) return;
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  }
  render() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Youre name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
