describe('Maintain the session Example', () => {

    // Use cy.session() to persist login state across tests
    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[name='username']").type('Admin');
            cy.get("input[name='password']").type('admin123');
            cy.get('button').contains('Login').click();

            // Ensure that the page has fully loaded after login
            cy.url().should('include', '/dashboard');
            cy.get('.oxd-main-menu').should('be.visible');
        });
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        
    });

    it('Test - My Info', () => {
        cy.get('.oxd-main-menu-item--name').contains('My Info').should('be.visible');
    });

    it('Test - Recruitment', () => {
        cy.get('.oxd-main-menu-item--name').contains('Recruitment').should('be.visible');
    });

    // This code execute in around 3 to 4 second but If the session is not Maintained then it it take around 10 to 12 sec

});
