/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import FieldSet from '../FieldSet/component';
import FormGroup from '../FormGroup/component';

const DateInput = (props) => {
  const { legend, hint } = props;

  return (
    <FormGroup>
      <FieldSet legend={legend} hint={hint}>
        <div className="govuk-date-input" id="expiry">
          <div className="govuk-date-input__item">
            <FormGroup>
              <label className="govuk-label govuk-date-input__label" htmlFor="expiry-day">
                Day
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="expiry-day" name="expiry-day" type="number" pattern="[0-9]*" />
            </FormGroup>
          </div>
          <div className="govuk-date-input__item">
            <FormGroup>
              <label className="govuk-label govuk-date-input__label" htmlFor="expiry-month">
                Month
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="expiry-month" name="expiry-month" type="number" pattern="[0-9]*" />
            </FormGroup>
          </div>
          <div className="govuk-date-input__item">
            <FormGroup>
              <label className="govuk-label govuk-date-input__label" htmlFor="expiry-year">
                Year
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="expiry-year" name="expiry-year" type="number" pattern="[0-9]*" />
            </FormGroup>
          </div>
        </div>
      </FieldSet>
    </FormGroup>
  );
};

export default DateInput;

DateInput.propTypes = {
  legend: PropTypes.string,
  hint: PropTypes.string,
};

DateInput.defaultProps = {
  legend: false,
  hint: false,
};
