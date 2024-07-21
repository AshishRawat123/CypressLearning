class CartPage {
    elements = {

        cartItems : () => cy.get('.cart_item'),
        checkoutButton :() => cy.get('#checkout'),
        firstNameField : () =>cy.xpath("//input[@placeholder='First Name']"),
        lastNameField : () => cy.xpath("//input[@placeholder='Last Name']"),
        postalCodeField : () => cy.get('#postal-code'),
        continueButton : ()=> cy.get('#continue'),
        taxApplied : () => cy.get("div[data-test='tax-label']"),
        finsihButton : () => cy.get('#finish'),
        checkoutLandingPage : 'checkout-complete.html',
        checkoutContainer : '#checkout_complete_container',
        thankYouMsg : () => cy.get(`${this.elements.checkoutContainer}>h2`),
        dispatchMsg : () => cy.get(`${this.elements.checkoutContainer}>div[data-test='complete-text']`),
        expectedThankYouMsg : 'Thank you for your order!',
        expectedDispatchMsg : 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        taxCharge : 3.20

    }

    checkoutwithUserDetails(firstName='ashish', lastName='rawat', pincode='123456'){
        this.elements.firstNameField().type(firstName);
        this.elements.lastNameField().type(lastName);
        this.elements.postalCodeField().type(pincode);
        this.elements.continueButton().click();
        this.elements.taxApplied().should('be.visible');
    }

    validatetotalSum(priceList){
        let totalPrice = 0;
        for (let price of priceList) {
            totalPrice = totalPrice + Number(price.replace('$','').trim());
        }
        totalPrice = totalPrice+this.elements.taxCharge;
        cy.get('.summary_total_label').should('contain.text',String(totalPrice))
        this.elements.taxApplied().should('contain.text', '$'+this.elements.taxCharge.toFixed(2));

    }

    finishPayment(){
        this.elements.finsihButton().click();
    }

    validateSucessMsg(){
        this.elements.thankYouMsg().should('have.text',this.elements.expectedThankYouMsg);
        this.elements.dispatchMsg().should('have.text', this.elements.expectedDispatchMsg);
    }
}

module.exports = new CartPage();