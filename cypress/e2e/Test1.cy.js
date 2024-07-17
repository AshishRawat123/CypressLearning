describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.banner').contains("Kitchen Sink").invoke('text').as('mytext');
    cy.log("  value   "+this.mytext);

  })
})