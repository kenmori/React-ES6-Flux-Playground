import React from 'react'
import CommentBox from './components/CommentBox'

var data = [
  {author : 'kenji', text: 'This is one comment'},
  {author : 'morita', text: 'This is *author* comment'}
];
React.render(
  <CommentBox data={data} />,
  document.getElementById('container')
);
