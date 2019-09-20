/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => {
  const {
    value,
    id,
    name,
    onChange,
    checked,
  } = props;

  return (
    <div className="govuk-radios__item">
      <input className="govuk-radios__input" id={id} name={name} type="radio" value={value} onChange={onChange} checked={checked} />
      <label className="govuk-label govuk-radios__label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default Radio;

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
