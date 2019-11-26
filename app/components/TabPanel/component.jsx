import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, title } = props;

  return (
    <section className="govuk-tabs__panel">
      <h2 className="govuk-heading-l">{title}</h2>
      {children}
    </section>
  );
};

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};
