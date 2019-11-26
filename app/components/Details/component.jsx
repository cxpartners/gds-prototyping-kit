import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const { children, title, modifier } = props;

  return (
    <details className="govuk-details" data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className={`govuk-details__summary-text ${modifier}`}>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

Details.defaultProps = {
  modifier: '',
};
