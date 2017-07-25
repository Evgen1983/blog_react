import React, { DOM } from 'react';
import PropTypes from 'prop-types';

const Like = ({ postId, updateLike }) => (
  DOM.div(
    null,
    React.createElement(
      'button',
      { 
        className: 'btn btn-primary',
        onClick: () => updateLike(postId)
      },
      'Like'
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