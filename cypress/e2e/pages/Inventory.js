class Inventory {

    elements = {
        menuButton:()=> cy.get('button#react-burger-menu-btn'),
        logoutButton: ()=> cy.get("[data-test='logout-sidebar-link']"),
        sortingProduct: ()=> cy.get('select.product_sort_container'),
        sortByPrice: ()=> this.elements.sortingProduct().contains('Price (low to high)'),
        productPriceList: ()=> cy.get('div.inventory_item_description .pricebar>div[data-test="inventory-item-price"]')
    }

    logout(){
        this.elements.menuButton().click();
        this.elements.logoutButton().click();
    }

    sortProductBy(sortingType){
        this.elements.sortingProduct().click();

        switch (sortingType) {
            case 'Price (low to high)':
                this.elements.sortByPrice().click();
                break;
                // @TODO for other sorting as well
            default:
                
                break;
        }
    }

    /**
     * assert sorting order of products
     * @param {String} order = true when Low to high else false
     */
    isSortByPrice(order=true){
        this.elements.productPriceList().then($list => {
            const texts = $list.map((index, el) => Cypress.$(el).text().trim()).get();
      
            // Make a copy of the texts array and sort it
            let sortedTexts;
            if (order == true)
                sortedTexts = [...texts].sort();
            else {
                sortedTexts = [...texts].sort().reverse();
            }
            // Assert that the texts array is equal to the sortedTexts array
            expect(texts).to.deep.equal(sortedTexts);
          });
    }

}

module.exports = new Inventory()