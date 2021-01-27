describe('My web tables handling test case', function() {
    it('Complete Test', function() {
      //test steps for that test will go inside it
      //visit is used to visit any URL
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     //To get attribute value using 'prop()-property value' of jQuery
     cy.get('#opentab').then(function(e1)
     {
         const url= e1.prop('href');
         //cy.log(url);
         cy.visit(url);
     })
    })
})