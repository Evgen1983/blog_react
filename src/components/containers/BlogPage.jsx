import React from 'react';
import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';
import { API_PATH } from 'constants/config';
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
    request
      .get(API_PATH)
      .end((err, res) => {
        if (!err && res.ok)
          this.setState({ posts: res.body });
      });
  }
  
  updateLike(postId) {
    request
      .put(`${API_PATH}/posts/${postId}/like`)
      .end((err, res) => {
        if (!err && res.ok) {
          const index = this.state.posts.findIndex(post => post.id == postId);
          const posts = this.state.posts; 
          posts[index] = res.body;

          this.setState({ posts });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <BlogList posts={this.state.posts} updateLike={this.updateLike}/>
          <PieChart columns={this.state.posts.map(
            post => [ post.text, post.meta.likesCount ]
          )} />
        </div>
      </div>
    );
  }
}

export default BlogPage;