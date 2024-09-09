describe('Maintain the session Example by commands.js file login ', () => {

    // Use cy.session() to persist login state across tests
    beforeEach(() => {
        cy.loginSession();
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        
    });

    //Tagging example in Cypress by Grep plugin
    it('Test - My Info',{ tags: '@smoke' }, () => {
        cy.get('.oxd-main-menu-item--name').contains('My Info').should('be.visible');
    });


    //
    it('Test - Recruitment smoke', () => {
        cy.get('.oxd-main-menu-item--name').contains('Recruitment').should('be.visible');
    });

    // This code execute in around 3 to 4 second but If the session is not Maintained then it it take around 10 to 12 sec

});
