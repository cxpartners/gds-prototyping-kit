import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const { children } = props;
  return (
    <main className="govuk-main-wrapper " id="main-content" role="main">
      {children}
    </main>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
