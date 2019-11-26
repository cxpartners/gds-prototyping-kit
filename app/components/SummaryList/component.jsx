import React from 'react';
import PropTypes from 'prop-types';

const SummaryList = (props) => {
  const { children, modifier } = props;

  return (
    <dl className="govuk-summary-list" modifier={modifier}>
      {children}
    </dl>
  );
};

export default SummaryList;

SummaryList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  modifier: PropTypes.string,
};

SummaryList.defaultProps = {
  modifier: '',
};
