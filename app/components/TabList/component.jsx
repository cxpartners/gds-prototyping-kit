import React from 'react';
import PropTypes from 'prop-types';

const TabList = (props) => {
  const { children } = props;

  return (
    <ul className="govuk-tabs__list">
      {children}
    </ul>
  );
};

export default TabList;

TabList.propTypes = {
  children: PropTypes.node.isRequired,
};
