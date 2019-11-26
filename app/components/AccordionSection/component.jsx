import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AccordionSection = (props) => {
  const {
    children,
    heading,
    expanded,
    onClick,
  } = props;

  const accordionSectionClassNames = classNames({
    'govuk-accordion__section': true,
    'govuk-accordion__section--expanded': expanded,
  });

  return (
    <div className={accordionSectionClassNames}>
      <div
        className="govuk-accordion__section-header"
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        <h2 className="govuk-accordion__section-heading govuk-!-font-size-27">
          <span className="govuk-accordion__section-button" id={heading}>
            {heading}
          </span>
          <span className="govuk-accordion__icon" aria-hidden="true" />
        </h2>
      </div>
      <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby={heading}>
        {children}
      </div>
    </div>
  );
};

export default AccordionSection;

AccordionSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  heading: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

AccordionSection.defaultProps = {
  children: null,
  onClick: '',
};
