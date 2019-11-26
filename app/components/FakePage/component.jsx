import React from 'react';
import PropTypes from 'prop-types';

const FakePage = (props) => {
  const { src } = props;

  return (
    <div className="gdskit-fakepage">
      <img src={src} alt="" />
    </div>
  );
};

export default FakePage;

FakePage.propTypes = {
  src: PropTypes.string.isRequired,
};
