import React from 'react';
import PropTypes from 'prop-types';

const Meta = ({ author, createdAt, updatedAt, likesCount }) => (
  <ul className='list-group center-block'>
    <li className='list-group-item'>
      {`Автор: ${author}`}
    </li>
    <li className='list-group-item'>
      {`${(createdAt) ? (`Создано: ${createdAt};`) : ''}`}
    </li>
    <li className='list-group-item'>
      {`${(updatedAt) ? (`Обновлено: ${updatedAt};`) : ''}`}
    </li>
    <li className='list-group-item'>
      {`Понравилось: ${likesCount}`}
    </li>
  </ul>
);

Meta.defaultProps = {
  author: '',
  createdAt: '',
  updatedAt: '',
  likesCount: 0
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  likesCount: PropTypes.number
};

export default Meta;