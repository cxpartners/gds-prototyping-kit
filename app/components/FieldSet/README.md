Fieldset
==========

### Import
```js
  import Fieldset from '../components/Fieldset/component';
```
<!-- STORY -->

### Usage

[https://design-system.service.gov.uk/components/fieldset/](https://design-system.service.gov.uk/components/fieldset/)

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
`children` | true | `````` | array of nodes | 
`legend` | false | null | string | show legend if true
`hint` | false | null | string | show hint if true
`inPage` | false | false | boolean | if inPage is false, returns legend as <h1>
`errorMessage` | false | '' | boolean | error message shown if error is true
`error` | false | false | boolean | shows error state if true