import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const { children, isOrdered } = props;
  if (isOrdered) {
    return (
      <ol className="govuk-list govuk-list--number">
        {children}
      </ol>
    );
  }
  return (
    <ul className="govuk-list govuk-list--bullet">
      {children}
    </ul>
  );
};

export default List;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isOrdered: PropTypes.bool,
};

List.defaultProps = {
  isOrdered: false,
};
