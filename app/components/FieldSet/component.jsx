import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FieldSet = (props) => {
  const {
    children,
    legend,
    hint,
    errorMessage,
    error,
  } = props;

  const fieldSetErrorClassNames = classNames({
    'govuk-visually-hidden': error,
  });

  const isLegend = legend ? (
    <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
      <h1 className="govuk-fieldset__heading">
        {legend}
      </h1>
    </legend>
  ) : '';

  const isHint = hint ? (
    <span id="hint" className="govuk-hint">
      {hint}
    </span>
  ) : '';

  const isError = error ? (
    <span className="govuk-error-message">
      <span className={fieldSetErrorClassNames}>Error:</span>
      &nbsp;
      {errorMessage}
    </span>
  ) : '';

  return (
    <fieldset className="govuk-fieldset" role="group" aria-describedby={hint ? 'hint' : ''}>
      {isLegend}
      {isHint}
      {isError}
      {children}
    </fieldset>
  );
};

export default FieldSet;

FieldSet.propTypes = {
  children: PropTypes.node.isRequired,
  legend: PropTypes.string,
  hint: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

FieldSet.defaultProps = {
  legend: null,
  hint: null,
};
