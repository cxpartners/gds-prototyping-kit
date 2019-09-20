import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => {
  const { children } = props;

  return (
    <div className="govuk-grid-row">
      {children}
    </div>
  );
};

export default Row;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
