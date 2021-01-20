//describe and it come from Mocha, expect comes from Chai. They are test suites
//it blocks treated as --> Test case
/// <reference types="Cypress" />

describe('My First Test', function() {
    it('My first test-case', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
     cy.get('.search-keyword').type("ca");
     cy.wait(2000)
     //get acts like findelement of selenium use the chai assertion should
     //visible is jquery function which will help to view only visible items
     cy.get('.product:visible').should('have.length',4);
     
     //Parent child chaining, find will look only inside the particular given scope not whole page
     cy.get(".products").find(".product").should('have.length',4);

     //click on add to cart for 2nd product
     cy.get('.products').find(".product").eq(2).contains('ADD TO CART').click()
    })
  })