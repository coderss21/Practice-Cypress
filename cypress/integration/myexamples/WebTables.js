/// <reference types="Cypress" />

describe('My web tables handling test case', function() {
    it('Complete Test', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     //Reach using parent
     cy.get('tr td:nth-child(2)').each(($el,index, $list) => {

         const text= $el.text();
         if(text.includes("Python"))
         {
             //Move to next sibling
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(Price) 
              {
                 const priceText= Price.text();
                 expect(priceText).to.equal('25');
             })
         }
        })

        /**
         * ---------Handling Mouse Hovers-----------
         */
        //Click on Mouse- hover using jQuery
        cy.get(".mouse-hover-content").invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top')

        //click on mouse-hover using force()
        cy.contains('Top').click({force: true});
        cy.url().should('include','top')

    })
})