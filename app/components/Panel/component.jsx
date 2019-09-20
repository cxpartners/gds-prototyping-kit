import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => {
  const { children, title } = props;

  return (
    <div className="govuk-panel govuk-panel--confirmation">
      <h1 className="govuk-panel__title">
        {title}
      </h1>
      <div className="govuk-panel__body">
        {children}
      </div>
    </div>
  );
};

export default Panel;

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
};
