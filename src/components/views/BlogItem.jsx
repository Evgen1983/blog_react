import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta';
import LikeContainer from 'components/containers/LikeContainer';

import { posts } from 'helpers/routes';
import history from 'helpers/history';

const BlogItem = ({ post }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>
      {
        history.location.pathname == posts(post.id)
          ? <div>{post.text}</div>
          : <Link to={posts(post.id)}> {post.text} </Link>
      }
    </TextBox>
    <Meta {...post.meta} />
    <LikeContainer postId={post.id} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape(Image.propTypes),
    meta: PropTypes.shape(Meta.propTypes),
    text: PropTypes.string,
    id: PropTypes.number
  }),
  updateLike: PropTypes.func
};

export default BlogItem;
