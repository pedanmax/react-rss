import cypress from 'cypress';
describe('Header', () => {
  it('successfully load header title', () => {
    cy.visit('/');
    cy.get('.header__title').should('have.text', 'Current page: home');
    cy.contains('About').click();
    cy.get('.header__title').should('have.text', 'Current page: about');
    cy.contains('Form').click();
    cy.get('.header__title').should('have.text', 'Current page: form');
  });
});
