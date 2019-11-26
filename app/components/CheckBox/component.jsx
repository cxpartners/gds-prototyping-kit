import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const {
    checked,
    value,
    onChange,
  } = props;

  return (
    <div className="govuk-checkboxes__item">
      <input className="govuk-checkboxes__input" id={value} name={value} type="checkbox" value={value} onChange={onChange} checked={checked} />
      <label className="govuk-label govuk-checkboxes__label" htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
