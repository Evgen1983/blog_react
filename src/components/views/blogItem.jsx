import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from 'components/ui/image';
import TextBox from 'components/ui/textBox';
import Meta from 'components/ui/meta';
import Like from 'components/ui/like';

import { posts } from 'helpers/routes';
import browserHistory from 'helpers/browserHistory';

const BlogItem = ({ post, updateLike }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>
      {
        browserHistory.location.pathname == posts(post.id)
          ? <div>{post.text}</div>
          : <Link to={posts(post.id)}> {post.text} </Link>
      }
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
