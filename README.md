# GDS Prototyping Kit ***Work in Progress***

> Client-side React-based Prototype with Express API using [govuk-frontend](https://github.com/alphagov/govuk-frontend)

For **Alpha**  projects

## Features
* React
* GovUk-Frontend
* SCSS
* Webpack
* Hot reloading with Webpack Dev Server
* ESLint
* Babel
* React-Router

## Usage
`npm run dev` to run development server
`npm run build` to build for production
`npm run test` to run eslint

## Updating the kit

Currently asset files are manually copied over to the assets folder from `node_modules`.

Idea for development: write build script (or npm script) to automate.

## Component list:
Idea for development: write README for each component (and link here) or Storybook?

- [x] Accordion - *needs expansion*
- [x] Back link
- [x] Breadcrumbs
- [x] Button
- [ ] Character count - *to do*
- [x] Checkboxes
- [x] Date input
- [x] Details
- [ ] Error message
- [ ] Error summary
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

- FakePage

## HTML Template

Uses [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to inject bundle at the bottom of `index.html`.

I've had to add `promise-polyfill` using [HtmlWebpackDeployPlugin](https://github.com/jharris4/html-webpack-deploy-plugin) to handle IE11 (injected above the bundle).