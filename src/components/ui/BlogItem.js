import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import Image from './Image.js';
import TextBox from './TextBox.js';
import Meta from './Meta.js';
import Like from './Like.js';

const BlogItem = ({ post, updateLike }) => (
  DOM.div(
    { className: 'row blog-item text-center' },
    null,
    DOM.div(null, React.createElement(Image, post.image)),
    DOM.div(null, React.createElement(Meta, post.meta)),
    React.createElement(TextBox, null, post.text),
    React.createElement(Like, {
      postId: post.id,
      likesCount: post.meta.likesCount,
      updateLike
    })
  )
);

BlogItem.propTypes = {
  image:  PropTypes.shape(Image.propTypes),
  meta: PropTypes.shape(Meta.propTypes),
  text: PropTypes.string,
  updateLike: PropTypes.func
};

export default BlogItem;