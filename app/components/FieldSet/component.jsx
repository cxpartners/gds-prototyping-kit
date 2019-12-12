import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fieldset = (props) => {
  const {
    children,
    legend,
    inPage,
    hint,
    errorMessage,
    error,
  } = props;

  const fieldsetErrorClassNames = classNames({
    'govuk-visually-hidden': error,
  });

  let isLegend = '';

  if (legend) {
    if (inPage) {
      isLegend = <legend className="govuk-fieldset__legend govuk-!-font-weight-bold govuk-!-font-size-24">{legend}</legend>;
    } else {
      isLegend = (
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 className="govuk-fieldset__heading">
            {legend}
          </h1>
        </legend>
      );
    }
  }

  const isHint = hint ? (
    <span id="hint" className="govuk-hint">
      {hint}
    </span>
  ) : '';

  const isError = error ? (
    <span className="govuk-error-message">
      <span className={fieldsetErrorClassNames}>Error:</span>
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

export default Fieldset;

Fieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  legend: PropTypes.string,
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  inPage: PropTypes.bool,
};

Fieldset.defaultProps = {
  legend: null,
  hint: null,
  inPage: false,
  errorMessage: '',
  error: false,
};
