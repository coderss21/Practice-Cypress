//describe and it come from Mocha, expect comes from Chai. They are test suites
//it blocks treated as --> Test case
/// <reference types="Cypress" />

describe('My third test case', function() {
    it('Proceed to checkout ', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://www.amazon.in/");
     cy.get('#twotabsearchtextbox').type("maggi").click();
     cy.get("#nav-search-submit-button").click();
     

    })
  })