import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const { children, ordered } = props;
  if (ordered) {
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
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
};
