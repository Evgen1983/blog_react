import React from 'react';
import PropTypes from 'prop-types';
import { API_PATH } from 'constants/config';

const Image = ({ src, alt, style }) => (
  <img className='center-block' src={API_PATH + src} alt={alt} style={style} />
);

Image.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/' + 
  '%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png',
  alt: '',
  style: {
    width: 300,
    height: 200
  }
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default Image;