import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = (props) => {
  const { children, size } = props;

  switch (size) {
    case 'large':
      return <p className="govuk-body-l">{children}</p>;
    case 'small':
      return <p className="govuk-body-s">{children}</p>;
    default:
      return <p className="govuk-body">{children}</p>;
  }
};

export default Paragraph;

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  size: PropTypes.oneOf(['large', 'small', false]),
};

Paragraph.defaultProps = {
  size: false,
};
