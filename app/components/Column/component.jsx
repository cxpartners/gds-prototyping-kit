import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => {
  const { children, columnWidth } = props;
  const columnClass = columnWidth ? `govuk-grid-column-${columnWidth}` : 'govuk-grid-column-full';

  return (
    <div className={columnClass}>
      {children}
    </div>
  );
};

export default Column;

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  columnWidth: PropTypes.oneOf(['full', 'one-half', 'one-third', 'two-thirds', 'one-quarter']),
};

Column.defaultProps = {
  columnWidth: 'full',
};
