import cypress from 'cypress';

beforeEach(() => {
  cy.visit('/form');
});

describe('The form page', () => {
  it('should successfully load form page', () => {
    cy.get('.form-page__title').should('have.text', 'Please fill out the form');
  });
  it('should add feedback card after successfully submit form', () => {
    cy.get('.feed-back-card').should('not.be.exist');
    cy.get('#name').type('Maks');
    cy.get('#movie').type('Avatar');
    cy.get('.form__date').type('1999-12-31');
    cy.get('.form__select').select('Bad');
    cy.get('[type="checkbox"]').check('English', { force: true });
    cy.get('[type="radio"]').check('5', { force: true });
    cy.get('input[type=file]').selectFile(
      {
        fileName: 'picture.png',
        contents: ['its a picture'],
      },
      { force: true }
    );
    cy.get('.form__submit').click();
    cy.get('.feed-back-card').should('have.length', 1);
  });
});
