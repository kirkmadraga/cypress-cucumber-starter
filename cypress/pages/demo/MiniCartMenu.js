class MiniCartMenu {
  elements = {
    shoppingCart : () => cy.get('.minicart-wrapper > .action.showcart'),
    shoppingCartCounter : () => cy.get('.counter-number'),
    cartItems : () => cy.get('#mini-cart > li'),
    qtyField : () => this.elements.cartItems().find('.cart-item-qty.item-qty'),
    updateQtyBtn : () => cy.get('button[title="Update"]'),
    removeItemBtn : () => cy.get('.action.delete'),
    acceptBtn: () => cy.get('.action-primary.action-accept'),
  };

  clickShoppingCart() {
    this.elements.shoppingCart().scrollIntoView().click();
  }

  getShoppingCartCounter() {
    return this.elements.shoppingCartCounter().scrollIntoView();
  }

  getCartItems() {
    return this.elements.cartItems();
  }

  inputQuantity(qty) {
    this.elements.qtyField().clear().type(qty);
  }
  
  updateQuantity() {
    this.elements.updateQtyBtn().click();
  }

  removeItem() {
    this.elements.removeItemBtn().click();
  }

  confirmRemove() {
    this.elements.acceptBtn().click();
  }
}

export const miniCartMenu = new MiniCartMenu();