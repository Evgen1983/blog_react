import React, { DOM } from 'react';

const Meta = ({ author, createdAt, updatedAt }) => (
  DOM.span(
    null,
    `${author}; ${(createdAt.length > 0) ? ('Создано:' + ' ' + createdAt +';' + ' ' + 'Обновлено:' + ' ' + updatedAt +';') : ''}`
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