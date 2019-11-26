import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = (props) => {
  const {
    children,
    modifier,
  } = props;

  const tagClassNames = classNames({
    'govuk-tag': true,
    [`${modifier}`]: modifier,
  });

  return (
    <strong className={tagClassNames}>
      {children}
    </strong>
  );
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

Tag.defaultProps = {
  modifier: '',
};
