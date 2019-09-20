/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Breadcrumbs from '../components/Breadcrumbs/component';
import Breadcrumb from '../components/Breadcrumb/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Footer from '../components/Footer/component';
import Button from '../components/Button/component';
import FieldSet from '../components/FieldSet/component';
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import FormGroup from '../components/FormGroup/component';
import { TOGGLE_RADIO_ERROR, UPDATE_RADIO } from '../reducers';

const RadioForm = () => {
  const radioError = useSelector((state) => state.radioError);
  const radioValue = useSelector((state) => state.radioValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <Breadcrumbs>
          <Breadcrumb url="/">Home</Breadcrumb>
          <Breadcrumb url="/" current>Form</Breadcrumb>
        </Breadcrumbs>
        <Main>
          <Row>
            <Column columnWidth="full">
              <FormGroup error={radioError || false}>
                <FieldSet legend="What can I do?" error={radioError || false} errorMessage="You have to choose an option">
                  <RadioGroup>
                    <Radio name="radio" id="nothing" value="Nothing" checked={radioValue === 'Nothing'} onChange={(e) => dispatch({ type: UPDATE_RADIO, payload: e.target.value })} />
                    <Radio name="radio" id="something" value="Something" checked={radioValue === 'Something'} onChange={(e) => dispatch({ type: UPDATE_RADIO, payload: e.target.value })} />
                    <Radio name="radio" id="everything" value="Everything" checked={radioValue === 'Everything'} onChange={(e) => dispatch({ type: UPDATE_RADIO, payload: e.target.value })} />
                  </RadioGroup>
                </FieldSet>
              </FormGroup>
              {radioValue === ''
                ? (
                  <Button onClick={() => {
                    dispatch({ type: TOGGLE_RADIO_ERROR });
                  }}
                  >
                  Continue
                  </Button>
                )
                : (
                  <Button href="/textform">
                  Continue
                  </Button>
                )}
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default RadioForm;
