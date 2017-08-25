import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta';
import LikeContainer from 'components/containers/LikeContainer';

import { posts, postEdit } from 'helpers/routes';


const BlogItem = ({ post }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>
      <Link to={posts(post.id)}>{post.title}</Link>
    </TextBox>
    <Meta {...post.meta} />
    <LikeContainer postId={post.id} />
    <Link to={postEdit(post.id)}>Edit</Link>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape(Image.propTypes),
    meta: PropTypes.shape(Meta.propTypes),
    title: PropTypes.string,
    id: PropTypes.number
  })
};

BlogItem.defaultProps = {
  post: {}
};

export default BlogItem;
