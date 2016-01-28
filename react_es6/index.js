import React from 'react'
import CommentBox from './components/CommentBox'


React.render(
  <CommentBox url="comment.json" pollInterval={2000} />,
  document.getElementById('container')
);
