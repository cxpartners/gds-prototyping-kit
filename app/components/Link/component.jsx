import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => {
  const {
    children,
    href,
    noVisitedState,
    onClick,
    modifier,
  } = props;

  const linkClassNames = classNames({
    'govuk-link': true,
    'govuk-link--no-visited-state': noVisitedState,
    [`${modifier}`]: modifier,
  });

  return (
    <RouterLink to={href} className={linkClassNames} onClick={onClick}>
      {children}
    </RouterLink>
  );
};

export default Link;

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  noVisitedState: PropTypes.bool,
  onClick: PropTypes.func,
  modifier: PropTypes.string,
};

Link.defaultProps = {
  noVisitedState: false,
  onClick: null,
  modifier: '',
};
