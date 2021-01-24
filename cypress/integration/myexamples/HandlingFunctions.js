/// <reference types="Cypress" />

describe('My fourth test case', function() {
    it('Complete Tests ', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     /**
      * -------- Handling Check Boxes ---------
      */
     //For checkboxes we can use 'check() method'
     cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1');
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
     //Selecting mutiple checkBoxes at a time
     cy.get("input[type='checkbox']").check(['option2','option3'])
     
     /**
      * ----------Handling Static Dropdowns-----------
      */
    cy.get("select").select('option2').should('have.value','option2');

    /**
     * ---------- Dynamic Dropdowns ---------
     */
    cy.get("#autocomplete").type('ind');
    cy.get("li.ui-menu-item div").each(($el,index,$list)=>
    {
       if($el.text()=="India"){
         cy.wrap($el).click();
       }
    })

    cy.get('#autocomplete').should('have.value','India');

    /**
     * ----------Handling visible and invisible elements-------
     */
    cy.get("#displayed-text").should('be.visible');
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should('not.be.visible');
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should('be.visible');

    /**
     * ----------Handling Radio Buttons-------
     */
    cy.get("input[value='radio2']").check().should('be.checked').and('have.value','radio2');
    cy.get("input[value='radio2']").uncheck().should('not.be.checked');

    

    })
  })