import cypress from 'cypress';

describe('The home page', () => {
  it('successfully load home page', () => {
    cy.visit('/');

    // cy.contains('type').click();
    // cy.url().should('include', '/commands/actions');
  });
});
