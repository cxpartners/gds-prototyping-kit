import React from 'react';
import PropTypes from 'prop-types';

const Accordion = (props) => {
  const { children } = props;

  return (
    <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
      {children}
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
