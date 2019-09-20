import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const { children } = props;

  return (
    <div className="govuk-warning-text">
      <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">Warning</span>
        {children}
      </strong>
    </div>
  );
};

export default Warning;

Warning.propTypes = {
  children: PropTypes.string.isRequired,
};
