import React from 'react';
import PropTypes from 'prop-types';

const InsetText = (props) => {
  const { children } = props;

  return (
    <p className="govuk-inset-text">
      {children}
    </p>
  );
};

export default InsetText;

InsetText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
