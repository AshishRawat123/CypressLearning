const InventoryPage = require("./pages/InventoryPage");
const LoginPage = require("./pages/LoginPage")

// Sauce Labs Onesie

describe('SauceDemo Login test',()=>{

    /**
     * Commented this as I see that browser is not preserving any storage when test complete
     * Else login required only once in before.
    before('Login before login',()=>{
        LoginPage.open();
        LoginPage.login("standard_user", "secret_sauce");
    })
         */

    beforeEach('goto Inventory Page',()=>{
        LoginPage.open();
        LoginPage.login("standard_user", "secret_sauce");
        // This execute if we able to preserve cookies and local Storage after each test
        // InventoryPage.open();
    })

    it('print the name and price of all Items',()=>{

        cy.log("Item Name                   ITEM PRICE")
        cy.get('.inventory_item_description').each($el =>{
            const Name = $el.find('div.inventory_item_name').text().trim();
            const price = $el.find('div.inventory_item_price').text().trim();
            cy.log(`${Name}       ${price}`);
        })
    })

    it('Add two product to card and goto card', ()=>{
        InventoryPage.itemAddToCart('Sauce Labs Backpack');
        InventoryPage.itemAddToCart('Sauce Labs Bike Light');
        InventoryPage.elements.quantity().should('have.text','2')

    })


    it('Logout',()=>{
        InventoryPage.logout();
        LoginPage.elements.username().should('be.visible');
    })

})