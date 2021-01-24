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
     
     //We can give alias by using 'as', when we give @ it means aliasing
     cy.get('.products').as('productlocator')

     //Parent child chaining, find will look only inside the particular given scope not whole page
     cy.get("@productlocator").find(".product").should('have.length',4);

     //click on add to cart for 2nd product
     cy.get('@productlocator').find(".product").eq(2).contains('ADD TO CART').click()
     //console.log('sf')

      //iterate over each element
      cy.get('@productlocator').find('.product').each(($el,index,$list)=> {

        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Carrot')){
           cy.wrap($el.find('button')).click();
        }
    })
    //apply assertion with actual and expected value
    cy.get('.brand').should('have.text','GREENKART')

    //if we assign it to some value then we need to resolve this 
    //this is to print text in logs
    cy.get('.brand').then(function (logoelement) 
    {
        cy.log(logoelement.text())
        
    })
    })
  })