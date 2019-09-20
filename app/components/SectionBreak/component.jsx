import React from 'react';
import PropTypes from 'prop-types';

const SectionBreak = (props) => {
  const { modifier } = props;

  let sectionBreakClassNames = 'govuk-section-break--visible govuk-section-break ';

  switch (modifier) {
    case 'xl':
      sectionBreakClassNames += 'govuk-section-break--xl';
      break;
    case 'l':
      sectionBreakClassNames += 'govuk-section-break--l';
      break;
    case 'm':
      sectionBreakClassNames += 'govuk-section-break--m';
      break;
    case 's':
      break;
    default:
      break;
  }

  return (
    <hr className={sectionBreakClassNames} />
  );
};

export default SectionBreak;

SectionBreak.propTypes = {
  modifier: PropTypes.string,
};

SectionBreak.defaultProps = {
  modifier: 's',
};
