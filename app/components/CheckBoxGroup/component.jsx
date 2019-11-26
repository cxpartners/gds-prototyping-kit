import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxGroup = (props) => {
  const { children } = props;

  return (
    <div className="govuk-checkboxes">
      {children}
    </div>
  );
};

export default CheckBoxGroup;

CheckBoxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
