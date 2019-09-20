import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import BackLink from '../components/BackLink/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';

const Check = () => {
  const radioValue = useSelector((state) => state.radioValue);
  const yourNameValue = useSelector((state) => state.yourNameValue);
  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <BackLink href="/textform" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h1">Check your answers before sending</Heading>
              <Heading level="h2">Personal details</Heading>
              <SummaryList>
                <SummaryListRow listKey="What can I do?" href="/radioform">
                  {radioValue || ''}
                </SummaryListRow>
                <SummaryListRow listKey="What's your name?" href="/textform">
                  {yourNameValue || ''}
                </SummaryListRow>
              </SummaryList>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Check;
