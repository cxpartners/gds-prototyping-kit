import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormGroup = (props) => {
  const { children, error } = props;

  const formGroupClassNames = classNames({
    'govuk-form-group': true,
    'govuk-form-group--error': error,
  });

  return (
    <div className={formGroupClassNames}>
      {children}
    </div>
  );
};

export default FormGroup;

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  error: PropTypes.bool.isRequired,
};
