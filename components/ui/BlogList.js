import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem.js';

const BlogList = ({ posts, updateLike }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => React.createElement(BlogItem, {key: post.id, post, updateLike})     
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array,
  updateLike: PropTypes.func
};

export default BlogList;