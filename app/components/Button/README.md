Button
==========

### Import
```js
  import Button from '../components/Button/component';
```
<!-- STORY -->

### Usage

[https://design-system.service.gov.uk/components/button/](https://design-system.service.gov.uk/components/button/)

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
`children` | true | `````` | string | button call-to-action
`isSubmit` | false | false | bool | changes the button type from button to submit if true
`isDisabled` | false | false | bool | changes button to disabled, if true
`modifier` | false | '' | node | adds a modifier class if one of `govuk-button--secondary`, `govuk-!-margin-right-1` or `govuk-button--warning`
`onClick` | false | () => '' | func | add click handler
`href` | false | '' | node | if this is truthy, returns a [NavLink](https://reacttraining.com/react-router/web/api/NavLink) (styled as a button) pass as the required path