class Inventory {

    elements = {
        menuButton:()=> cy.get('button#react-burger-menu-btn'),
        logoutButton: ()=> cy.get("[data-test='logout-sidebar-link']"),
        sortingProduct: ()=> cy.get('select.product_sort_container'),
        sortByPrice: ()=> this.elements.sortingProduct().select('Price (low to high)'),
        productPriceList: ()=> cy.get('div.inventory_item_description .pricebar>div[data-test="inventory-item-price"]')
    }

    logout(){
        this.elements.menuButton().click();
        this.elements.logoutButton().click();
    }

    sortProductBy(sortingType){
        this.elements.sortingProduct();

        switch (sortingType) {
            case 'Price (low to high)':
                this.elements.sortByPrice();
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
            let sortedArray;
            if (order == true)
                sortedArray = texts.slice().sort((a, b) => a - b);
            else {
                sortedArray = texts.slice().sort((a, b) => b - a);
            }
            for(let i=0;i<sortedArray.length;i++){
                cy.log(sortedArray[i])
            }
            // Assert that the texts array is equal to the sortedTexts array
            expect(texts).to.deep.equal(sortedArray);
          });
    }

}

module.exports = new Inventory()