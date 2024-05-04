describe("Login Page", () => {
  it("Should Show Validation Error when existing user Signup", () => {
    cy.visit("http://54.175.158.227:3000/login");

    cy.intercept('POST', 'http://3.218.18.30:3001/app/login', {
      statusCode: 201,
      body: {
        message: 'Incorrect Password',
      },
    }).as('loginRequest');

    cy.get('[id=email]').type('somanadhyakkati1@gmail.com');
    cy.get('[id=password]').type('1234');

    cy.get('[id=submit]').click();
    cy.get('[id=errormessage]').should('be.visible').and('contain.text', 'Incorrect Password');

  });
});