import cypress from 'cypress';

beforeEach(() => {
  cy.visit('/');
});

describe('The home page', () => {
  it('should successfully load home page', () => {
    cy.get('.home__list-title').should('have.text', 'Choose movie');
  });

  it('should successfully load all cards', () => {
    cy.get('.card').should('have.length', 59);
  });

  it('should open modal window after click by button card', () => {
    cy.get('.modal').should('not.be.exist');
    cy.get('.card:first-child .card__button').click();
    cy.get('.modal').should('be.exist');
  });

  it('should close modal window after click on the cross', () => {
    cy.get('.card:first-child .card__button').click();
    cy.get('.modal__close').click();
    cy.get('.modal').should('not.be.exist');
  });
});
