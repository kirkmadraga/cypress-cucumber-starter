import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@fail" }, function () {
  cy.log("This test is intended to fail.")
});