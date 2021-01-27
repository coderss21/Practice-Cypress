//describe and it come from Mocha, expect comes from Chai. They are test suites
//it blocks treated as --> Test case
/// <reference types="Cypress" />

describe('My Second test case', function() {
    it('Proceed to checkout ', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      //We can give alias by using 'as', when we give @ it means aliasing
     cy.get('.products').as('productlocator');

      //iterate over each element
      cy.get('@productlocator').find('.product').each(($el,index,$list)=> {

        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Brocolli')){
           cy.wrap($el.find('button')).click();
        }
      })
        
    // //click on cart option and go to procees
    cy.get('.cart-icon > img').click();
    //cy.get(".cart-preview > .action-block > button").click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.wait(4000);
    cy.contains('Place Order').click();

    })
  })