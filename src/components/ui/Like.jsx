import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ updateLike }) => (
  <div>
    {
      updateLike
        ? <button className='btn btn-primary' onClick={ () => updateLike() }>Like</button>
        : <button className='btn btn-basic'>Like</button>
    }
  </div>
);

Like.defaultProps = {
  count: 0,
  likesCount: 0
};

Like.propTypes = {
  count: PropTypes.number,
  updateLike: PropTypes.func
};

export default Like;