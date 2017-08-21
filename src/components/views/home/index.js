import React from 'react';
import PropTypes from 'prop-types';

import BlogList from 'components/views/home/BlogList';
import PieChartContainer from 'components/containers/PieChartContainer';

import Helmet from 'react-helmet';

const Home = ({ posts }) => (
  <div className="container">
    {
      <Helmet
        title='Home'
        meta={[
          { name: 'description', content: 'Blog home page' },
          { name: 'keywords', content: 'Blog, posts, home' }
        ]}
      />
    }
    <div className="row">
      <div className="col-md-6">
        <BlogList posts={posts} />
      </div>

      <div className="col-md-6">
        <PieChartContainer />
      </div>

    </div>
  </div>
);

Home.propTypes = {
  posts: PropTypes.array
};

export default Home;