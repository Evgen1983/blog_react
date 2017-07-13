import React, { DOM } from 'react';
import PropTypes from 'prop-types';

const Like = ({ postId, likesCount, updateLike }) => (
  DOM.div(
    null,
      React.createElement(
        'button',
        { onClick: () => updateLike(postId) },
        'Like'
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${likesCount}`)
      )
  )
);

Like.defaultProps = {
  count: 0,
  likesCount: 0
};

Like.propTypes = {
  count: PropTypes.number,
  updateLike: PropTypes.func.isRequired
};

export default Like;