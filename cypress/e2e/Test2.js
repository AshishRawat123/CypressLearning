it('adds todos', () => {
    cy.visit('https://todo.app.com')
    cy.get('[data-testid="new-todo"]')
      .type('write code{enter}')
      .type('write tests{enter}')
    // confirm the application is showing two items
    cy.get('[data-testid="todos"]').should('have.length', 2)
  })