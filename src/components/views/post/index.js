import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from 'components/views/BlogItem';


const Post = ({ post }) => (
  post
    ? <BlogItem key={post.id} post={post} />
    : null
);


Post.propTypes = {
  post: PropTypes.object,
  updateLike: PropTypes.func
};

export default Post;