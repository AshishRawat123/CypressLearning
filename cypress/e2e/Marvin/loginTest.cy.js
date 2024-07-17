import Login from '../pages/Login'
import Inventory from '../pages/Inventory'
const validDetails = require('../../fixtures/validUsers.json')
const invalidUser = require('../../fixtures/invalidUsers.json')
describe('Login with valid user Details',()=>{


    
    let invalidUserJson;

    before('Get Invalid userData',()=>{
        cy.fixture('invalidUsers.json').then((data)=>{
            invalidUserJson = data;
        })
    })

    beforeEach('In login Page',()=>{
        // Login.openPage();
        cy.visit('https://www.saucedemo.com');
    })


    validDetails.forEach(userdetail => {
        it(`should Login with username : ${userdetail.username} and password : ${userdetail.password}`,()=>{

            Login.loginwithUserDetails(userdetail.username, userdetail.password);
            Inventory.elements.menuButton().should('be.visible');
            cy.url().should('include', '/inventory.html');

        })
    });

    it('should not Login with invalid user Details and validate error message',()=>{
        Login.loginwithUserDetails(invalidUserJson.username, invalidUserJson.password);
        Login.elements.errorNotification().should('not.have.value', 'Epic sadface: Sorry, this user has been locked out.')

    })

})