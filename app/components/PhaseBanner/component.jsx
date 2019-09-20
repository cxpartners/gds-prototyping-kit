import React from 'react';

const PhaseBanner = () => (
  <div className="govuk-phase-banner">
    <p className="govuk-phase-banner__content">
      <strong className="govuk-tag govuk-phase-banner__content__tag">
        alpha
      </strong>
      <span className="govuk-phase-banner__text">
        This is a new service – your&nbsp;
        <a className="govuk-link" href="/">feedback</a>
        &nbsp;will help us to improve it.
      </span>
    </p>
  </div>
);

export default PhaseBanner;
