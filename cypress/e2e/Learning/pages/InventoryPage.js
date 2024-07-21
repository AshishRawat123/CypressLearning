class InventoryPage{

    elements={
        menubutton : () => cy.get('#react-burger-menu-btn'),
        burgerMenuList: () => cy.get('.bm-item-list>a'),
        allItem : ()=> this.elements.burgerMenuList().contains('All Items'),
        loginbutton : () => this.elements.burgerMenuList().contains('Logout'),
        activeDropdownOption : () => cy.get('.select_container>span[data-test="active-option"]'),
        itemDescription : () => cy.get('.inventory_item_label div.inventory_item_name'),
        addToCartButton : () => cy.get('.pricebar>button'),
        basketLink : () => cy.get('.shopping_cart_link'),
        quantity : () => cy.get('[data-test="shopping-cart-badge"]')
    }

    open(){
        cy.visit('https://www.saucedemo.com/inventory.html')
    }

    logout(){
        this.elements.menubutton().click();
        this.elements.loginbutton().click();
    }

    itemAddToCart(itemName){
        cy.xpath(`//div[@class='inventory_item_name '][contains(text(),'${itemName}')]//ancestor::div[@class='inventory_item_description']`).as('productRequired');
        cy.get('@productRequired').xpath('.//button[@class]').click();  
    }

    navigateToCart(){
        this.elements.basketLink().click()
    }
}
module.exports = new InventoryPage()