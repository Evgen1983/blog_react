import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BlogItem from 'components/views/blogItem';
import PieChart from 'components/ui/pieChart';

const BlogList = ({ posts, updateLike }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          _.map(posts, (post) => (
            <BlogItem
              key={post.id}
              post={post}
              updateLike={ () => updateLike(post.id, posts) }
            />
          ))
        }
      </div>

      <div className="col-md-6">
        <PieChart columns={
          posts.map(
            post => [ post.text, post.meta.likesCount ]
          )}
        />
      </div>
    </div>
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  updateLike: PropTypes.func
};

export default BlogList;