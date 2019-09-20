import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SummaryListRow = (props) => {
  const { listKey, children, href } = props;

  return (
    <div className="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">
        {listKey}
      </dt>
      <dd className="govuk-summary-list__value">
        {children}
      </dd>
      <dd className="govuk-summary-list__actions">
        <NavLink className="govuk-link" to={href}>
          Change
          <span className="govuk-visually-hidden">{listKey}</span>
        </NavLink>
      </dd>
    </div>
  );
};

export default SummaryListRow;

SummaryListRow.propTypes = {
  listKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

SummaryListRow.defaultProps = {
  href: '#',
};
