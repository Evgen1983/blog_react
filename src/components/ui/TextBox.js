import { DOM } from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => (
  DOM.span({ className: 'text-center' }, null, props.children)
);

TextBox.defaultProps = {
  children: ''
};

TextBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};  

export default TextBox;