import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
  const {
    label,
    hint,
    id,
    rows,
    inputWidth,
  } = props;

  const isLabel = label ? (
    <label className="govuk-label" htmlFor={id}>
      {label}
    </label>
  ) : '';

  const isHint = hint ? (
    <span id="hint" className="govuk-hint">
      {hint}
    </span>
  ) : '';

  let textareaInputClassNames = 'govuk-textarea ';

  switch (inputWidth) {
    case '2':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '3':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '4':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '5':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '10':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '20':
      textareaInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case 'full':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'three-quarters':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'two-thirds':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-half':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-third':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-quarter':
      textareaInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    default:
      textareaInputClassNames += 'govuk-!-width-full';
      break;
  }


  return (
    <div className="govuk-form-group">
      {isLabel}
      {isHint}
      <textarea className={textareaInputClassNames} id={id} name={id} rows={rows} aria-describedby={hint ? 'hint' : ''} />
    </div>
  );
};

export default Textarea;

Textarea.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  rows: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputWidth: PropTypes.string,
};

Textarea.defaultProps = {
  label: false,
  hint: false,
  inputWidth: false,
};
