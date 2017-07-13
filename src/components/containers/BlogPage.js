import React from 'react';
import BlogList from '../ui/BlogList.js';
import PieChart from '../ui/PieChart.js';
import { posts } from '../constants/items';
const { DOM } = React;

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.updateLike = this.updateLike.bind(this);
  }
  
  updateLike(postId) {
    const index = this.state.posts.findIndex(post => post.id == postId);
    const posts = this.state.posts; 

    posts[index].meta.likesCount++;

    this.setState({ posts: posts });
  }

   render() {
    return (
      DOM.div(
          null,
          React.createElement(BlogList, { posts: this.state.posts, updateLike: this.updateLike }),
          React.createElement(PieChart, {columns: this.state.posts.map( post => [ post.text, post.meta.likesCount ] )})
      )
    )
  }
};

export default BlogPage;