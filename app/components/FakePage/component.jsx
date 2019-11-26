import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/component';
import Footer from '../Footer/component';
import Header from '../Header/component';
import Main from '../Main/component';
import PhaseBanner from '../PhaseBanner/component';

const FakePage = (props) => {
  const { href, src } = props;

  return (
    <>
      <Header href="/" />
      <Container>
        <PhaseBanner />
        <Main>
          <div className="gdskit-fakepage">
            <img src={src} alt="" />
          </div>
        </Main>
      </Container>
      <Footer href={href} />
    </>
  );
};

export default FakePage;

FakePage.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
};

FakePage.defaultProps = {
  href: '',
};
