import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = (props) => {
  const { children, size, modifier } = props;

  switch (size) {
    case 'large':
      return <p className={`govuk-body-l ${modifier}`}>{children}</p>;
    case 'small':
      return <p className={`govuk-body-s ${modifier}`}>{children}</p>;
    default:
      return <p className={`govuk-body ${modifier}`}>{children}</p>;
  }
};

export default Paragraph;

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  size: PropTypes.oneOf(['large', 'small', false]),
  modifier: PropTypes.string,
};

Paragraph.defaultProps = {
  size: false,
  modifier: '',
};
