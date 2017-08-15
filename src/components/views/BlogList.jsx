import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import BlogItem from 'components/views/BlogItem';
import PieChartContainer from 'components/containers/PieChartContainer';


const BlogList = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          map(posts, (post) => (
            <BlogItem key={post.id} post={post} />
          ))
        }
      </div>

      <div className="col-md-6">
        <PieChartContainer />
      </div>
    </div>
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  updateLike: PropTypes.func
};

export default BlogList;