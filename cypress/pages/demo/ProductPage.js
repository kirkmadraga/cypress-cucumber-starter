class ProductPage {
  elements = {
    sizeSwatch : () => cy.get('.size.swatch-attribute > div[role="listbox"]'),
    colorSwatch : () => cy.get('.color.swatch-attribute > div[role="listbox"]'),
    addToCartBtn : () => cy.get('button#product-addtocart-button')
  };

  clickSizeOption(index) {
    cy.wait(1000); // Work around to wait for form JS to load.
    this.elements.sizeSwatch().should('be.visible');
    this.elements.sizeSwatch().find('div').eq(index).scrollIntoView().click();
  }

  clickColorOption(index) {
    this.elements.colorSwatch().should('be.visible');
    this.elements.colorSwatch().find('div').eq(index).scrollIntoView().click();
  }

  addToCart() {
    this.elements.addToCartBtn().click();
  }
}

export const productPage = new ProductPage();