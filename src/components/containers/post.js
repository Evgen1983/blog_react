import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';
import request from 'superagent';
import { API_PATH } from 'constants/config';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { id } = this.props.match.params;

    request.get(
      `${API_PATH}/posts/${id}`,
      {},
      (err, res) => {
        if (!err)
          this.setState({post: res.body});
      }
    );
  }

  updateLike(postId) {
    request
      .put(`${API_PATH}/posts/${postId}/like`)
      .end((err, res) => {
        if (!err && res.ok)
          this.setState({ post: res.body });
      });
  }


  render() {
    const { id } = this.props.match.params;
    const { post } = this.state;

    return post
      ? <BlogItem key={id} post={post} 
        updateLike={ () => this.updateLike(id) }/>
      : null;
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;