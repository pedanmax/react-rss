import cypress from 'cypress';

describe('About page', () => {
  it('should successfully load page', () => {
    cy.visit('/about');
    cy.get('.about').should('have.text', 'About page');
  });
});
