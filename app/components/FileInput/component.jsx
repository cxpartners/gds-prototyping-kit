/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const FileInput = (props) => {
  const { id, label, onChange } = props;

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={id}>
        {label || 'Upload a file'}
      </label>
      <input className="govuk-file-upload" id={id} name={id} type="file" onChange={onChange} multiple />
    </div>
  );
};

export default FileInput;

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onChange: PropTypes.func,
};
