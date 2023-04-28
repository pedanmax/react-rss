import cypress from 'cypress';
beforeEach(() => {
  cy.visit('/');
});

describe('Search', () => {
  it('should save the search value after switching to another page and back', () => {
    cy.get('input[type="search"]').type('test').should('have.value', 'test');
    cy.get('input[type="submit"]').click();
    cy.contains('About').click();
    cy.contains('Home').click();
    cy.get('input[type="search"]').should('have.value', 'test');
  });
});
