/// <reference types="Cypress" />

describe('My fourth test case', function() {
    it('Complete Tests ', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     //cy.get('#name').type('Shubhra').
     cy.get("#alertbtn").click();
     cy.get("[value='Confirm']").click();
      
     //Window:alert - we can trigger this event and browser will open the alert and we will capture it
      cy.on('window:alert',(str)=>
      {
          //Using Mocha compare strings
          expect(str).to.equal('Hello , share this practice page and share your knowledge');
      })
    
    //window:confirm
    cy.on('window:confirm',(str1)=>
    {
        expect(str1).to.equal('Hello , Are you sure you want to confirm?');
    })
})
})