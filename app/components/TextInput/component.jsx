import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    label,
    hint,
    id,
    inputWidth,
    value,
    onChange,
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

  let textInputClassNames = 'govuk-input ';

  switch (inputWidth) {
    case '2':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '3':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '4':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '5':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '10':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case '20':
      textInputClassNames += `govuk-input--width-${inputWidth}`;
      break;
    case 'full':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'three-quarters':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'two-thirds':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-half':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-third':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    case 'one-quarter':
      textInputClassNames += `govuk-!-width-${inputWidth}`;
      break;
    default:
      textInputClassNames += 'govuk-!-width-full';
      break;
  }

  return (
    <div className="govuk-form-group">
      {isLabel}
      {isHint}
      <input className={textInputClassNames} id={id} name={id} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  inputWidth: PropTypes.oneOf(['2', '3', '4', '5', '10', '20', 'full', 'three-quarters', 'two-thirds', 'one-half', 'one-third', 'one-quarter']),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: '',
  inputWidth: false,
  hint: false,
  value: '',
};
