describe(`
    Given an unsigned userWhen
    this user want to publish a healthy food`, () => {
  it('Then the Sign Up screen should be shown', () => {
    cy.visit('http://127.0.0.1:5173/');

    cy.get('[data-testid="publish-button"]').click();

    cy.get('[data-testid="signup-screen"]').should('be.visible');
  })
});
