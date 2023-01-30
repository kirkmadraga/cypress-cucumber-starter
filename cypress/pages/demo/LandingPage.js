class LandingPage {
  elements = {
    products : () => cy.get('li.product-item'),
  };

  open() {
    cy.visit('/')
  }

  clickFirstProduct() {
    this.elements.products().first().click();
  }
}

export const landingPage = new LandingPage();