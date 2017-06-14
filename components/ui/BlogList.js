import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem.js';

const BlogList = ({ posts }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => React.createElement(BlogItem, {key: post.id, post: post})     
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array
};

export default BlogList;