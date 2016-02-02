import React from 'react'

export default class CommentForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).vale.trim();
    if(!text || !author) return;
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  }
  render() {
    return (
      <form className='commentForm'>
        <input type="text" placeholder="Youre name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
