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

## Updating the kit

Currently asset files are manually copied over to the assets folder from `node_modules`.

Idea for development: write build script (or npm script) to automate.

## Component list:
Idea for development: write README for each component.

- [ ] *Accordion - experimental feature*
- [x] Back link
- [x] Breadcrumbs
- [x] Button
- [ ] *Character count - last resort*
- [ ] Checkboxes
- [x] Date input
- [x] Details
- [ ] Error message
- [ ] Error summary
- [x] Fieldset
- [ ] File upload
- [x] Footer
- [x] Header
- [x] Inset text
- [x] Panel
- [x] Phase banner
- [x] Radios
- [ ] *Select - last resort*
- [x] Skip link
- [x] Summary list
- [ ] Table
- [x] Tabs
- [ ] Tag
- [x] Text input
- [x] Textarea
- [x] Warning text

## HTML Template

Uses [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to inject bundle at the bottom of `index.html`.

I've had to add `promise-polyfill` using [HtmlWebpackDeployPlugin](https://github.com/jharris4/html-webpack-deploy-plugin) to handle IE11 (injected above the bundle).