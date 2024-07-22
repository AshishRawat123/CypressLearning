import Constant  from '../../fixtures/Constants'
import CartPage from './pages/CartPage';
import InventoryPage from './pages/InventoryPage';
const LoginPage = require("./pages/LoginPage")


describe('e2e Test case to add a product and and Checkout',()=>{


    beforeEach('login before',()=>{

       LoginPage.open();
       LoginPage.login(Constant.DefaultUsername, Constant.DefaultPassword);
    })

    it('should validate payment amount and checkout page',()=>{

        InventoryPage.itemAddToCart(Constant.itemsList[0]);
        InventoryPage.itemAddToCart('Sauce Labs Bike Light');
        InventoryPage.elements.quantity().should('have.text','2');

        InventoryPage.navigateToCart();
        CartPage.elements.cartItems().should('have.length',2);
        // Navigate to checkout Page
        CartPage.elements.checkoutButton().click();
        CartPage.checkoutwithUserDetails();
        CartPage.validatetotalSum(['$29.99', '$9.99']);
        CartPage.finishPayment();
        CartPage.validateSucessMsg();
    })

    it('Payment should fail when no product is added with error message',()=>{
       InventoryPage.navigateToCart();
        CartPage.elements.checkoutButton().click();
        CartPage.finishPayment();
        CartPage.elements.thankYouMsg().should('not.contain', CartPage.elements.expectedThankYouMsg);
        
    })
})
