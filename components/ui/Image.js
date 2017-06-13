import React, { DOM } from 'react';

const Image = (props) => (
  DOM.img({
    src: props.src,
    alt: props.text,
    style: {
      width: 200,
      height: 200
    }
  })
)

export default Image;