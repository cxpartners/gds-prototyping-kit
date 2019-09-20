import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Breadcrumbs from '../components/Breadcrumbs/component';
import Breadcrumb from '../components/Breadcrumb/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Paragraph from '../components/Paragraph/component';
import Link from '../components/Link/component';
import List from '../components/List/component';
import SectionBreak from '../components/SectionBreak/component';
import Button from '../components/Button/component';
import Details from '../components/Details/component';
import Panel from '../components/Panel/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Tabs from '../components/Tabs/component';
import Tab from '../components/Tab/component';
import TabList from '../components/TabList/component';
import TabPanel from '../components/TabPanel/component';
import Warning from '../components/Warning/component';
import BackLink from '../components/BackLink/component';
import DateInput from '../components/DateInput/component';
import TextInput from '../components/TextInput/component';
import Textarea from '../components/Textarea/component';
import InsetText from '../components/InsetText/component';
import Tag from '../components/Tag/component';

const Example = () => (
  <>
    <Header />
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
                <Tab href="tab-1" title="cool tab" selected />
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
              <DateInput legend="Some Date" hint="some hint" />
              <TextInput label="Text input" id="text-input" inputWidth="one-third" />
              <Textarea label="Text area" hint="Text area hint" rows="5" inputWidth="one-third" id="example-text-area" />
            </form>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer />
  </>
);

export default Example;
