import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import BlogItem from './BlogItem.jsx';

const BlogList = ({ posts, updateLike }) => (
  <div>
    {
      _.map(posts, (post) => (
        <BlogItem
          key={post.id}
          post={post}
          updateLike={ () => updateLike(post.id) }
        />
      ))
    }
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  updateLike: PropTypes.func
};

export default BlogList;