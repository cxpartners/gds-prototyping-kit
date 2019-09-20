import React from 'react';
import PropTypes from 'prop-types';

const Tag = (props) => {
  const { children } = props;

  return (
    <strong className="govuk-tag">
      {children}
    </strong>
  );
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.string.isRequired,
};
