


describe("Successfully Login the User", () => {
    it("passes", () => {
      cy.visit("http://44.196.77.186:3000/");
      cy.get('[id="loginsignup-btn"]').click();
      cy.url().should("eq", "http://44.196.77.186:3000/login");
      cy.get("[id=email]").type("somanadhyakkati1@gmail.com");
      cy.get("[id=password]").type("1234");
      cy.get('[id="submit"]').click();
      cy.url().should("include", "/");
      cy.window().its("localStorage").invoke("getItem", "token").should("exist");
      cy.eyesOpen({
        appName: "Personal Budget",
        testName: "Visual Regression Testing",
      });
      cy.eyesCheckWindow();
      cy.eyesClose();
    });
  });