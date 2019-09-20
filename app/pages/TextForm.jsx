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
import FormGroup from '../components/FormGroup/component';
import TextInput from '../components/TextInput/component';
import { TOGGLE_YOUR_NAME_ERROR, UPDATE_YOUR_NAME } from '../reducers';

const TextForm = () => {
  const yourNameError = useSelector((state) => state.yourNameError);
  const yourNameValue = useSelector((state) => state.yourNameValue);
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
              <FormGroup error={yourNameError || false}>
                <FieldSet legend="What's your name?" error={yourNameError || false} errorMessage="Enter your name">
                  <TextInput
                    id="yourName"
                    hint="Enter your full name"
                    inputWidth="one-half"
                    value={yourNameValue}
                    onChange={(e) => dispatch({ type: UPDATE_YOUR_NAME, payload: e.target.value })}
                  />
                </FieldSet>
              </FormGroup>
              {yourNameValue === ''
                ? (
                  <Button onClick={() => {
                    dispatch({ type: TOGGLE_YOUR_NAME_ERROR });
                  }}
                  >
                  Continue
                  </Button>
                )
                : (
                  <Button href="/check">
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

export default TextForm;
