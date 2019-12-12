TextInput
==========

### Import
```js
  import TextInput from '../components/TextInput/component';
```
<!-- STORY -->

### Usage

[https://design-system.service.gov.uk/components/button/](https://design-system.service.gov.uk/components/button/)

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
`label` | false | `````` | string | All text inputs must have visible labels (not required as you can add a label as a page heading)
`hint` | false | `````` | string | Hint text
`id` | true | `````` | string | id
`name` | true | `````` | string | name
`rows` | true | `````` | string | number of rows - determines height of textarea
`inputWidth` | false | `````` | string | input width - one of 2, 3, 4, 5, or 10 - width in characters or 'full', 'three-quarters','two-thirds','one-half', 'one-third', or 'one-quarter'
`onChange` | false | `````` | function | handle text change
`value` | true | `````` | string | value of text
`type` | true | `````` | string | input type - one of 'text', 'password', 'number', or 'email'
`placeholder` | true | `````` | string | placeholder
