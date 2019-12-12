# GDS Prototyping Kit

> Create GDS Prototypes with React [govuk-frontend](https://github.com/alphagov/govuk-frontend)

Designed for **Alpha** projects

## Features
* React
* GovUk-Frontend
* SCSS
* React-Router
* Redux
* Webpack
* Babel
* Hot reloading with Webpack Dev Server
* ESLint

## Usage

Clone the repo, cd into the directory and run `npm install`.

`npm run start` to run development server,
`npm run build` to build for production,
`npm run test` to run eslint.

Or use `docker-compose up` if you have Docker Desktop installed.

### User Journeys

The kit is designed to optimise creating user journeys for Alpha projects. Created using React 16.9.0, React-Redux and React-Router, it utilises [Hooks](https://reactjs.org/docs/hooks-intro.html) to keep component creation simple.

The kit also features a `<FakePage>` component that inserts an image of page into the flow.

### Creating pages
We recommend using VS Code and Code Snippets. `component`, `page` and `page with state` VS Code Snippets are saved in `.vscode/gds-prototyping-kit.code-snippets`. 
To find out more, read the [VS Code Docs](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

#### Create a page:
* create a new file in the `app/pages` folder,
* choose `Insert Snippet` in the Command Palette and choose `page`,
* The snippet copies some JSX to the new file with placeholders - multiple cursors ready to accept mutliple inputs which you can tab between.
* Type a name for your page, press the `tab` key, 
* Type a title for your page, press the `tab` key,
* Type the name of the previous page in your flow or delete this element if not relevant.

#### Add a page to the router:
* the router is located in app/App.jsx
* the router uses React Router, add a `<Route>` component for the new page importing the page component from the `app/pages` folder. Using the `exact` property ensures that the `path` specified has to exactly match.

```
  const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={ExampleIndexPage} />
        <Route path="/myNewPage" component={MyNewPage} />
      </Switch>
    </Router>
  );

  export default hot(App);
```

To find out more, read the [React Router docs](https://reacttraining.com/react-router/web/guides/quick-start).

### Creating and modifying components

#### Create a new component
* create a new file in the `app/components` folder,
* choose `Insert Snippet` in the Command Palette and choose `component`,
* The snippet copies some JSX to the new file with placeholders - multiple cursors ready to accept mutliple inputs which you can tab between.
* Type a name for your component, press the `tab` key, 
* You can name the enclosing tag for your component, or leave blank to use the [React Fragments shorter syntax](https://reactjs.org/docs/fragments.html#short-syntax).

#### Modify existing component styles
* create a `.scss` in the component folder for files,
* include this file in `styles/main.scss`.

#### Using PropTypes
* You can catch a lot of bugs with typechecking using the [prop-types library](https://reactjs.org/docs/typechecking-with-proptypes.html).

### Persisting data
#### Creating a page with state management
* As with creating a page, create a new file in the `app/pages` folder and choose `Insert Snippet` in the Command Palette but choose `page with state`,
* there are additional placeholders for reducers, and state variables.

#### Add a reducer
* In the `app/reducers.js` file, add your Actions, Reducer and Action Creators
* Add an Intial State to `initialState` (also in the `app/reducers.js` file)
* Import the state to your page using the `useSelector()` redux hook
* Dispatch state changes using the `useDispatch()` Hook

Example

reducers.js

```

export const UPDATE_YOUR_NAME = 'UPDATE_YOUR_NAME';

const initialState = {
  yourNameValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YOUR_NAME:
      return {
        ...state,
        yourNameValue: action.payload,
      };
    default:
      return state;
  }
};

export const updateYourName = () => (dispatch) => {
  dispatch({ type: UPDATE_YOUR_NAME });
};

```

page.jsx

```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../components/TextInput/component';
import { UPDATE_YOUR_NAME } from '../reducers';

const TextForm = () => {
  const yourNameValue = useSelector((state) => state.yourNameValue);
  const dispatch = useDispatch();

  return (
    ...
    <TextInput
      id="yourName"
      hint="Enter your full name"
      inputWidth="one-half"
      value={yourNameValue}
      onChange={(e) => dispatch({ type: UPDATE_YOUR_NAME, payload: e.target.value })}
    />
    ...
  );
};
export default TextForm;

```

To find out more, read about [Hooks in the React Redux docs](https://react-redux.js.org/api/hooks)

## Component list:

- [x] Accordion - *room for improvement - see issue X*
- [x] Back link
- [x] [Breadcrumbs](/app/components/Breadcrumb)
- [x] Button - *needs expansion - see issue X (add Start Button)*
- [ ] Character count - *to do - see issue X*
- [x] Checkboxes
- [x] Date input - *needs expansion - see issue X (add Date Input onChange events)*

- [x] Details
- [ ] Error message - *to do - see issue X*
- [ ] Error summary - *to do - see issue X*
- FakePage
- [x] Fieldset 
- [x] File upload - *needs expansion*
- [x] Footer

- [x] Header- *needs expansion - see issue X (add Service Name / Navigation)*
- [x] Heading
- [x] Inset text
- [x] Panel
- [x] Phase banner - *needs expansion - see issue X (add Beta / add Feedback link)*
- [x] Radio - *needs expansion - see issue X (add hints / add Smaller Buttons)*
- [x] RadioGroup - *needs expansion - see issue X (handle )*

- [x] Row
- [x] Section break
- [ ] Select - *to do*
- [x] Skip link
- [x] Summary list
- [ ] Table - *to do*
- [x] Tabs

- [x] Tag
- [x] Text input
- [x] Textarea
- [x] Warning text

## Differences to govuk-frontend:
### HTML Template

Uses [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to inject bundle at the bottom of `index.html`. `promise-polyfill` is used [HtmlWebpackDeployPlugin](https://github.com/jharris4/html-webpack-deploy-plugin) to handle IE11 (injected above the bundle).

### Hot reloading
Uses [react-hot-loader](https://github.com/gaearon/react-hot-loader).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### Contributing to the Gov.uk Design System

The GDS community operates with these principles:
1. Start with what exists
2. Contribute back and help others
3. Prioritise openness and honesty

To find out more, read the [Gov.uk Design System 'Community' page](https://design-system.service.gov.uk/community/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
