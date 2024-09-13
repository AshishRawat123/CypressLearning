describe('Test base URL from command line',()=>{
    it('Get url From commandline',()=>{
        cy.visit('/');
        cy.wait(10000); // Please check the command in Readme file
    })
})