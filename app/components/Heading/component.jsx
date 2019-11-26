import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const { caption, children, level } = props;

  let captionClassName;
  let headingClassName;
  let headingTag;

  switch (level) {
    case 'h1':
      captionClassName = 'govuk-caption-xl';
      headingClassName = 'govuk-heading-xl';
      headingTag = <h1 className={headingClassName}>{children}</h1>;
      break;
    case 'h2':
      captionClassName = 'govuk-caption-l';
      headingClassName = 'govuk-heading-l';
      headingTag = <h2 className={headingClassName}>{children}</h2>;
      break;
    case 'h3':
      captionClassName = 'govuk-caption-m';
      headingClassName = 'govuk-heading-m';
      headingTag = <h3 className={headingClassName}>{children}</h3>;
      break;
    case 'h4':
      captionClassName = 'govuk-caption-s';
      headingClassName = 'govuk-heading-s';
      headingTag = <h4 className={headingClassName}>{children}</h4>;
      break;
    default:
      captionClassName = 'govuk-caption-xl';
      headingClassName = 'govuk-heading-xl';
      headingTag = <h1 className={headingClassName}>{children}</h1>;
  }

  return (
    <>
      { caption ? <span className={captionClassName}>{caption}</span> : '' }
      {headingTag}
    </>
  );
};

export default Heading;

Heading.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
  level: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  caption: '',
};
