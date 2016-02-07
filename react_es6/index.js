import React from 'react'
import CommentBox from './components/CommentBox'


React.render(
  <CommentBox url="comments.json" pollInterval={112000} />,
  document.getElementById('container')
);
