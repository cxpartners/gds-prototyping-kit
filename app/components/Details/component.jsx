import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const { children, title } = props;

  return (
    <details className="govuk-details" data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {title}
        </span>
      </summary>
      <div className="govuk-details__text">
        {children}
      </div>
    </details>
  );
};

export default Details;

Details.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
