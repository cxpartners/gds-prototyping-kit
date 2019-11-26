# GDS Prototyping Kit

> Create GDS Prototypes with React [govuk-frontend](https://github.com/alphagov/govuk-frontend)

For **Alpha** projects

## Features
* React
* GovUk-Frontend
* SCSS
* Webpack
* Hot reloading with Webpack Dev Server
* ESLint
* Babel
* React-Router
* Redux

## Usage

Clone the repo, cd into the directory and run `npm install`.

`npm run start` to run development server,
`npm run build` to build for production,
`npm run test` to run eslint.

Or use `docker-compose up` if you have Docker Desktop installed.

### User Journeys

The kit is designed to optimise creating user journeys.

### Creating pages
We recommend using VS Code and Code Snippets. `component`, `page` and `page with state` VS Code Snippets are saved in `.vscode/gds-prototyping-kit.code-snippets`. 
To find out more, read the [VS Code Docs](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

#### Create a page:
* create a new file in the `app/pages` folder,
* choose `Insert Snippet` in the Command Palette,
* The snippet copies some JSX to the new file with placeholders - multiple cursors ready to accept mutliple inputs which you can tab between.
* Type a name for your page, press the `tab` key, 
* Type a title for your page, press the `tab` key,
* Type the name of the previous page in your flow or delete this element if not relevant.

#### Add a page to the router:
* the router is located in app/App.jsx

To find out more, read []() 

### Creating and modifying components

#### Create a new components

#### Modify existing component styles

### Persisting data

To find out more, read []() 

#### Creating a page with state management

#### Add a reducers


## Component list:

- [x] Accordion - *needs expansion*
- [x] Back link
- [x] [Breadcrumbs](/app/components/Breadcrumb)
- [x] Button
- [ ] Character count - *to do*
- [x] Checkboxes
- [x] Date input

- [x] Details
- [ ] Error message
- [ ] Error summary
- FakePage
- [x] Fieldset
- [x] File upload - *needs expansion*
- [x] Footer

- [x] Header
- [x] Inset text
- [x] Panel
- [x] Phase banner
- [x] Radios
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

Uses [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to inject bundle at the bottom of `index.html`.  `promise-polyfill` is used [HtmlWebpackDeployPlugin](https://github.com/jharris4/html-webpack-deploy-plugin) to handle IE11 (injected above the bundle).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
