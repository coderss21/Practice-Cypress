/// <reference types ="Cypress" />
describe("My Second test suite ",function() 
{
    //Before Function Hook
    before(function() {
        //runs once before all tests in the block, in this basically all setup things are put
        cy.fixture('example').then(function(data){
          this.data=data
        })
    })
    it('My First Test Case',function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(":nth-child(1) > .form-control").type(this.data.name);
        //cy.get('#exampleFormControlSelect1').select("Female");
        cy.get('select').select(this.data.gender);
        cy.get(":nth-child(4) > .ng-untouched").should('have.value',this.data.name);
        cy.get(":nth-child(1) > .form-control").should('have.attr','minlength',2);
        cy.get("#inlineRadio3").should('be.disabled');

        //Go to shop page
        cy.get(":nth-child(2) > .nav-link").click();
        
        const productName = this.data.productName;
        productName.forEach(element => 
            cy.selectProduct(element)
            );
  
    })
    
})