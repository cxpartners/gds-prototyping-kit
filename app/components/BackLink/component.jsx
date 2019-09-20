import React from 'react';
import PropTypes from 'prop-types';

const BackLink = (props) => {
  const { href } = props;

  return (
    <a className="govuk-back-link" to={href}>Back</a>
  );
};

export default BackLink;

BackLink.propTypes = {
  href: PropTypes.string.isRequired,
};
