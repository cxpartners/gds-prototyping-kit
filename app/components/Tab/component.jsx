import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Tab = (props) => {
  const {
    selected,
    href,
    title,
  } = props;
  const tabClassNames = classNames({
    'govuk-tabs__list-item': true,
    'govuk-tabs__list-item--selected': selected,
  });

  return (
    <li className={tabClassNames}>
      <Link className="govuk-tabs__tab" to={href}>
        {title}
      </Link>
    </li>
  );
};

export default Tab;

Tab.propTypes = {
  selected: PropTypes.bool,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  selected: false,
};
