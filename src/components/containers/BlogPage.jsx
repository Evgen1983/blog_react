import React from 'react';
import BlogList from '../ui/BlogList.jsx';
import PieChart from '../ui/PieChart.jsx';
import { API_PATH } from '../../constants/config.js';
import request from 'superagent';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.updateLike = this.updateLike.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      API_PATH,
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }
  
  updateLike(postId) {
    const index = this.state.posts.findIndex(post => post.id == postId);
    const posts = this.state.posts; 

    posts[index].meta.likesCount++;

    this.setState({ posts });
  }

  render() {
    return (
      <div className="container">
        <div>
          <BlogList posts={this.state.posts} handleLike={this.updateLike}/>
          <PieChart columns={this.state.posts.map(
            post => [ post.text, post.meta.likesCount ]
          )} />
        </div>
      </div>
    );
  }
}

export default BlogPage;