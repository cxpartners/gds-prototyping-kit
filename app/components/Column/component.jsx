import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => {
  const { children, columnWidth } = props;
  const columnClass = `govuk-grid-column-${columnWidth}`;

  return (
    <div className={columnClass}>
      {children}
    </div>
  );
};

export default Column;

Column.propTypes = {
  children: PropTypes.node.isRequired,
  columnWidth: PropTypes.oneOf(['full', 'one-half', 'one-third', 'two-thirds', 'one-quarter']).isRequired,
};
