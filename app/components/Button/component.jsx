/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Button = (props) => {
  const {
    children,
    isDisabled,
    isSubmit,
    modifier,
    onClick,
    href,
  } = props;

  const buttonClassNames = classNames({
    'govuk-button': true,
    'govuk-button--disabled': isDisabled,
    [`${modifier}`]: modifier,
  });

  return (
    href ? (
      <NavLink to={href} className={buttonClassNames} data-module="govuk-button">
        {children}
      </NavLink>
    ) : (
      <button className={buttonClassNames} data-module="govuk-button" disabled={isDisabled ? 'disabled' : ''} aria-disabled={isDisabled} type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
        {children}
      </button>
    )
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  modifier: PropTypes.oneOf(['govuk-button--secondary', 'govuk-!-margin-right-1', 'govuk-button--warning', '']),
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  isSubmit: false,
  modifier: '',
  onClick: () => '',
  href: '',
};
