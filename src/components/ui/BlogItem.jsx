import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image.jsx';
import TextBox from './TextBox.jsx';
import Meta from './Meta.jsx';
import Like from './Like.jsx';
import { postsPath } from '../../helpers/routes.js';

const BlogItem = ({ post, updateLike }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>
      <Link to={postsPath(post.id)}>{post.text}</Link>
    </TextBox>
    <Meta {...post.meta} />
    <Like {...{updateLike}} />
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