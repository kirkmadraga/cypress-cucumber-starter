# Cypress + Cucumber Starter Project

Template test framework that uses page object model for end-to-end testing.

## Pre-requisites
* NodeJS

## Getting started
1. Clone the repository to your machine.
2. Install project dependencies:

   `npm install`

## Running the tests
* Via the Cypress app:

  `npm run cypress:start`

* Run the tests in the background:

  `npm run cypress:test`

* Run tests by tags:

  `npm run cypress:test -- --env tags=@test`

## Demo
Demo test cases can be found under `/cypress/e2e/features/demo` and can be executed by running the @demo tag. One of the tests is meant to fail on purpose!

## Adding your own tests
When you are ready to write your tests, you may delete the demo-related files under `/cypress/e2e/features/demo`, `/cypress/e2e/step_definitions/demo`  and `/cypress/e2e/pages/demo`. Update the baseUrl of cypress.config.js to your system under test URL.

1. Write your scenarios in Gherkin under `/cypress/e2e/features`
2. Add the steps definitions for each corresponding step name under `cypress/e2e/step_definitions`
3. Implement page objects under `cypress/e2e/pages`

## Reports
[TODO](https://github.com/Shelex/cypress-allure-plugin)

## Configuration
You can override the default configuration by passing additional command line parameters to the npm script, e.g., `npm run cypress:test -- --browser firefox -- --headed`

Alternatively, you can provide your own config file entirely in cases where system under test runs in different environments.

More on Cypress configuration [here](https://docs.cypress.io/guides/references/configuration).
The cucumber preprocessor configuration documentation can be found [here](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/configuration.md)


## Built with
:white_check_mark: https://github.com/cypress-io/cypress

:white_check_mark: https://github.com/badeball/cypress-cucumber-preprocessor

:white_check_mark: https://github.com/bahmutov/cypress-esbuild-preprocessor

## Further reading
:scroll: https://cucumber.io/docs/gherkin/reference/

:scroll: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/cucumber-basics.md