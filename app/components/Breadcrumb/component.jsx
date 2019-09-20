import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  const { current, children, url } = props;

  return (
    current
      ? <li className="govuk-breadcrumbs__list-item" aria-current="page">{children}</li>
      : (
        <li className="govuk-breadcrumbs__list-item">
          <a
            className="govuk-breadcrumbs__link"
            href={url}
          >
            {children}
          </a>
        </li>
      )
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  current: PropTypes.bool,
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Breadcrumbs.defaultProps = {
  current: false,
};
