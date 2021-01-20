//describe and it come from Mocha, expect comes from Chai. They are test suites
//it blocks treated as --> Test case
/// <reference types="Cypress" />

describe('My First Test', function() {
    it('My first test-case', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
     cy.get('.search-keyword').type("ca");
     //get acts like findelement of selenium use the chai assertion should
     cy.get('.product').should('have.length',4);

    })
  })