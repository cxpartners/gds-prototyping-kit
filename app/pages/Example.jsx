/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Accordion from '../components/Accordion/component';
import AccordionSection from '../components/AccordionSection/component';
import BackLink from '../components/BackLink/component';
import Breadcrumb from '../components/Breadcrumb/component';
import Breadcrumbs from '../components/Breadcrumbs/component';
import Button from '../components/Button/component';
import CheckBox from '../components/CheckBox/component';
import CheckBoxGroup from '../components/CheckBoxGroup/component';
import Column from '../components/Column/component';
import Container from '../components/Container/component';
import DateInput from '../components/DateInput/component';
import Details from '../components/Details/component';
import Fieldset from '../components/Fieldset/component';
import Footer from '../components/Footer/component';
import Header from '../components/Header/component';
import Heading from '../components/Heading/component';
import InsetText from '../components/InsetText/component';
import Link from '../components/Link/component';
import List from '../components/List/component';
import Main from '../components/Main/component';
import Panel from '../components/Panel/component';
import Paragraph from '../components/Paragraph/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Row from '../components/Row/component';
import SectionBreak from '../components/SectionBreak/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Tab from '../components/Tab/component';
import TabList from '../components/TabList/component';
import Tabs from '../components/Tabs/component';
import TabPanel from '../components/TabPanel/component';
import Tag from '../components/Tag/component';
import Textarea from '../components/Textarea/component';
import TextInput from '../components/TextInput/component';
import Warning from '../components/Warning/component';
import { TOGGLE_ACCORDION, TOGGLE_CHECKBOX } from '../reducers';

const Example = () => {
  const checkboxChecked = useSelector((state) => state.checkboxChecked);
  const showAccordion = useSelector((state) => state.showAccordion);
  const dispatch = useDispatch();

  return (
    <>
      <Header href="/" />
      <Container>
        <PhaseBanner />
        <Breadcrumbs>
          <Breadcrumb url="/">Home</Breadcrumb>
          <Breadcrumb url="/">Menu</Breadcrumb>
          <Breadcrumb url="/" current>Page</Breadcrumb>
        </Breadcrumbs>
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading level="h1" caption="heading caption (optional)">This is my heading</Heading>
              <Paragraph size="large">This is the leading paragraph and as such uses a larger font size.</Paragraph>
              <Paragraph>
                This is a normal paragraph with a&nbsp;
                <Link href="/" noVisitedState>link</Link>
              .
              </Paragraph>
              <List>
                <li>This is an unordered list</li>
                <li>(followed by a SectionBreak)</li>
              </List>
              <SectionBreak modifier="l" />
              <List ordered>
                <li>This is an ordered list</li>
                <li>This is an ordered list</li>
                <li>This is an ordered list</li>
              </List>
              <Warning>
                This is a warning!
              </Warning>
              <Button modifier="govuk-!-margin-right-1">Button</Button>
              <Button modifier="govuk-button--secondary">Secondary button</Button>
              <Paragraph size="small">This is a small paragraph and as such uses a smaller font size.</Paragraph>
              <InsetText>
                Here is some Inset Text with a&nbsp;
                <Tag>Tag</Tag>
                .
              </InsetText>
              <Details title="Reveal some details">Here is some additional text I was hiding.</Details>
              <Button modifier="govuk-button--warning">Warning button</Button>
              <Panel title="Panel">
                Your reference number
                <br />
                <strong>HDJ2123F</strong>
              </Panel>
              <SectionBreak modifier="l" />
            </Column>
          </Row>
          <Row>
            <Column columnWidth="two-thirds">
              <Tabs title="Tab List">
                <TabList>
                  <Tab href="tab-1" title="cool tab" isSelected />
                  <Tab href="tab-2" title="another cool tab" />
                </TabList>
                <TabPanel id="tab-1" title="Cool Tab">
                  <Heading level="h3">Summary list:</Heading>
                  <SummaryList>
                    <SummaryListRow listKey="key">value</SummaryListRow>
                    <SummaryListRow listKey="key">
                      value
                      <br />
                      value
                      <br />
                      value
                    </SummaryListRow>
                    <SummaryListRow listKey="key">value</SummaryListRow>
                  </SummaryList>
                </TabPanel>
              </Tabs>
            </Column>
          </Row>
          <Row>
            <Column columnWidth="full">
              <SectionBreak modifier="l" />
              <BackLink href="/" />
              <Heading level="h2">Form fields</Heading>
              <form action="/form-handler" method="post" noValidate>
                <DateInput legend="Some date" hint="some hint" />
                <TextInput label="Text input" id="text-input" inputWidth="one-third" type="text" onChange={(e) => { e.preventDefault(); }} />
                <Textarea label="Text area" hint="Text area hint" rows="5" inputWidth="one-third" id="example-text-area" />
              </form>
            </Column>
          </Row>
          <Row>
            <Column>
              <Fieldset legend="Fieldset">
                <CheckBoxGroup>
                  <CheckBox
                    checked={checkboxChecked}
                    onChange={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_CHECKBOX, payload: e.target.value }); }}
                    value="checkbox"
                  />
                </CheckBoxGroup>
              </Fieldset>
            </Column>
          </Row>
          <Row>
            <Column>
              <Accordion>
                <AccordionSection
                  heading="Accordion"
                  onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_ACCORDION }); }}
                  expanded={showAccordion}
                  aria-expanded={showAccordion ? 'true' : ''}
                >
                  <Paragraph>Uses onClick to dispatch TOGGLE_ACCORDION</Paragraph>
                  <Paragraph>aria-expanded</Paragraph>
                </AccordionSection>
              </Accordion>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer href="/" />
    </>
  );
};

export default Example;
