import React, { PropTypes } from 'react';

import BlogItem from 'components/views/blogItem';


const Post = ({ post, updateLike }) => (
  post
    ? <BlogItem key={post.id} post={post} 
      updateLike={ () => updateLike(post.id) } />
    : null
);


Post.propTypes = {
  post: PropTypes.object,
  updateLike: PropTypes.func
};

export default Post;