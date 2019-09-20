import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const { children, title } = props;

  return (
    <div className="govuk-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
