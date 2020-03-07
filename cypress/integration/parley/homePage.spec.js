context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title in the navigation bar', () => {
    cy.get('.logo').should('exist')
    cy.get('.logo').contains('PARLEY')
  })

  it('presents the available activities', () => {
    cy.get('.host_meeting').should('exist')
    cy.get('.join_meeting').should('exist')
  })
})
