import { DOM } from 'react';
import PropTypes from 'prop-types';

const Meta = ({author, createdAt, updatedAt, likesCount}) => (
  DOM.span(
    { className: 'list-group center-block', },
    null,
    DOM.li(
      { className: 'list-group-item' }, 
      `Автор: ${author};`
    ),
    DOM.li(
      { className: 'list-group-item' }, 
      `${(createdAt) ? (`Создано: ${createdAt};`) : ''}`
    ),
    DOM.li(
      { className: 'list-group-item' }, 
      `${(updatedAt) ? (`Обновлено: ${updatedAt};`) : ''}`
    ),
    DOM.li(
      { className: 'list-group-item' }, 
      `Понравилось: ${likesCount}`
    )     
  )
);

Meta.defaultProps = {
  author: '',
  createdAt: '',
  updatedAt: ''
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default Meta;