/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
  const {
    children,
    isSubmit,
    modifier,
    onClick,
    href,
  } = props;
  const buttonClassNames = `govuk-button ${modifier}`;

  return (
    href ? (
      <NavLink to={href} className={buttonClassNames} data-module="govuk-button">
        {children}
      </NavLink>
    ) : (
      <button className={buttonClassNames} data-module="govuk-button" type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
        {children}
      </button>
    )
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  modifier: PropTypes.oneOf(['govuk-button--secondary', 'govuk-!-margin-right-1', 'govuk-button--warning', '']),
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Button.defaultProps = {
  isSubmit: false,
  modifier: '',
  onClick: () => '',
  href: '',
};
