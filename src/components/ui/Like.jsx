import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ updateLike }) => (
  <div>
    <button className='btn btn-primary' onClick={ () => updateLike() }>
      Like
    </button>
  </div>
);

Like.propTypes = {
  updateLike: PropTypes.func
};

export default Like;