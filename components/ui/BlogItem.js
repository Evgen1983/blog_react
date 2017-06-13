import React, { DOM } from 'react';
import Image from './Image.js'
import TextBox from './TextBox.js'

const BlogItem = ({ post }) => (
  DOM.div(
    null,
    React.createElement(Image, post),
    React.createElement('br'),
    React.createElement(TextBox, null, post.text)
  )
)

export default BlogItem;