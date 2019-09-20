import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  const { children } = props;

  return (
    <div className="govuk-width-container">
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
