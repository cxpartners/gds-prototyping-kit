import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, id, title } = props;

  return (
    <section className="govuk-tabs__panel" id={id}>
      <h2 className="govuk-heading-l">{title}</h2>
      {children}
    </section>
  );
};

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
