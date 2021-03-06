import React from 'react';
import PropTypes from 'prop-types';

const ErrorBlock = ({ message }) => {
  if (!message) return null;

  return (
    <span style={{color: '#ff0000'}}>
      {message}
    </span>
  );
};

ErrorBlock.propTypes = {
  message: PropTypes.string
};

export default ErrorBlock;