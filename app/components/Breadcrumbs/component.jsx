import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  const { children } = props;

  return (
    <nav className="govuk-breadcrumbs constrained">
      <ol className="govuk-breadcrumbs__list">
        {children}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};
