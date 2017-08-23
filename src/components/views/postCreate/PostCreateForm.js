import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

import InputField from 'components/ui/form/InputField';

const PostCreateForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field label="Title"
      component={InputField}
      type="text" 
      name="title"/>

    <Field label="Image Src" 
      component={InputField} 
      type="text" 
      name="imageSrc"/>

    <Field label="Image Alt" 
      component={InputField} 
      type="text" 
      name="imageAlt"/>

    <Field label="Author" 
      component={InputField} 
      type="text" 
      name="author"/>

    <input type="submit" className="btn btn-info" value="Submit"/>
  </form>
);


PostCreateForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default PostCreateForm;