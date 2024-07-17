describe('Asshole Cypress', () => {

    it('Login in Tools QA', function() {

      

      cy.visit('https://j2store.net/subs/index.php');
      cy.get("h2.product-title>a")
      .then(($div)=> {
        var value = $div.text();
        // console.log(value) 
        cy.log(value)
      })
      cy.get("h2.product-title>a").each(($el, index, $list)=> {

        cy.wrap($el.parent("h2").parent("div[itemprop='item']").find(".sale-price")).then(($productPrice)=>{
          const price=$productPrice.text();
          cy.log("Name of the product "+$el.text()+" and price "+$productPrice.text())
        })
        if($el.text().includes("magazine")){
          cy.wrap($el.parent('h2').parent("div[itemprop='item']").find('.sale-price')).invoke('text').as('parentProduct');
          $el.parent('h2').parent("div[itemprop='item']").find('form input[type="submit"]').click();
          return false;

        }
        // cy.get(".cart-product-unit-price>span.cart-item-value").contains
      })
      cy.title().should('eq','Cart');
      //Need to check this how we can save text from previous execution
      cy.log(cy.get('@parentProduct').then(($text)=>{
        cy.log("value  is  "+$text);
        cy.get(".cart-product-unit-price>span.cart-item-value").should('have.text',$text)
      }));
    })
  })