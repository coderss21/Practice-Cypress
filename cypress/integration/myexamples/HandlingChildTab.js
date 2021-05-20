// <reference types="Cypress" />

describe('My fourth test case', function() {
    it('Complete Tests ',{ tags: '@smoke' }, function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     //Calling the 'removeAttr' function of jQuery and passing the value will remove that CSS part 
     cy.get("#opentab").invoke('removeAttr','target').click();

     //Retrieve Url
     cy.url().should('include','index');

     //To go back to previous page
     cy.go('back');

     cy.url().should('include','AutomationPractice');

    })
    it('Test1',()=>{
    
    });
    it('Test 2', () => {});
})