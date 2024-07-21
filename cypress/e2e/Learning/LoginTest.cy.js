const LoginPage = require('./pages/LoginPage')
const jsonData = require('../../fixtures/validUser.json')

describe('SauceDemo Login test',()=>{

    let invalidJSON; 
    
    before('generate or get the User Data',()=>{
        cy.fixture('invalidUser.json').then((InvalidUser)=>{
            invalidJSON = InvalidUser;
        })
    })
    
    beforeEach('Laucnh login Url ',()=>{
        LoginPage.open();
    })

    it('Login with invalid userdetail',()=>{
        LoginPage.login(invalidJSON.user, invalidJSON.password);
        LoginPage.elements.errorMessage().should("have.text",invalidJSON.expectErrorMsg);  
    })


    jsonData.forEach((testData) => {
        it(`Login with valid credentials username- ${testData.username} password- ${testData.password}`, () => {

            LoginPage.login(testData.username, testData.password);
            cy.url().should('include', '/inventory.html');
        })
    })
})