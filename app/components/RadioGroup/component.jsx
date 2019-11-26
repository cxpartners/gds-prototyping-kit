import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioGroup = (props) => {
  const { children, inline } = props;
  const radioGroupClassNames = classNames({
    'govuk-radios': true,
    'govuk-radios--inline': inline,
  });

  return (
    <div className={radioGroupClassNames} data-module="govuk-radios">
      {children}
    </div>
  );
};

export default RadioGroup;

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  inline: PropTypes.bool,
};

RadioGroup.defaultProps = {
  inline: false,
};
