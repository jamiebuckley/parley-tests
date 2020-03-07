context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('presents the available activities', () => {
    cy.get('.create-retro').should('exist')
    cy.get('.join-retro').should('exist')
  })
})
