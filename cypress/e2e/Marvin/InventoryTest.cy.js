import Login from "../pages/Login"
import Inventory from "../pages/Inventory"

describe('Tests related to Inventory Page',()=>{

    let username;
    let password;

    before('Login with valid details',()=>{
        cy.fixture('validUsers').then(userdetail=>{
            let usersDetail = userdetail[0];
            username = usersDetail.username;
            password = usersDetail.password;
        })
        // Login.openPage();
        // Login.loginwithUserDetails(username, password);

    })

    it('Sort all product by Price',()=>{

        cy.visit('https://www.saucedemo.com');
        Login.loginIfRequired(username, password);

        Inventory.sortProductBy('Price (low to high)');
        Inventory.isSortByPrice();

    })
    /*
    xit('Sort all product by Price',()=>{

        Inventory.sortProductBy('Price (high to low)');
        Inventory.isSortByPrice();

    })
        */



})