import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const { caption, children, level } = props;

  switch (level) {
    case 'h1':
      return (
        caption
          ? (
            <>
              <span className="govuk-caption-xl">{caption}</span>
              <h1 className="govuk-heading-xl">
                {children}
              </h1>
            </>
          )
          : (
            <h1 className="govuk-heading-xl">
              {children}
            </h1>
          )
      );
    case 'h2':
      return (
        caption
          ? (
            <>
              <span className="govuk-caption-l">{caption}</span>
              <h2 className="govuk-heading-l">
                {children}
              </h2>
            </>
          )
          : (
            <h2 className="govuk-heading-l">
              {children}
            </h2>
          )
      );
    case 'h3':
      return (
        caption
          ? (
            <>
              <span className="govuk-caption-m">{caption}</span>
              <h3 className="govuk-heading-m">
                {children}
              </h3>
            </>
          )
          : (
            <h3 className="govuk-heading-m">
              {children}
            </h3>
          )
      );
    case 'h4':
      return (
        caption
          ? (
            <>
              <span className="govuk-caption-s">{caption}</span>
              <h4 className="govuk-heading-s">
                {children}
              </h4>
            </>
          )
          : (
            <h4 className="govuk-heading-s">
              {children}
            </h4>
          )
      );

    default:
      return (
        <h1 className="govuk-heading-xl">
          {children}
        </h1>
      );
  }
};

export default Heading;

Heading.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  caption: '',
};
