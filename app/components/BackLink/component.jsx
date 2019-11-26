import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const BackLink = (props) => {
  const { href } = props;

  return (
    <RouterLink className="govuk-back-link" to={href}>Back</RouterLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  href: PropTypes.string.isRequired,
};
