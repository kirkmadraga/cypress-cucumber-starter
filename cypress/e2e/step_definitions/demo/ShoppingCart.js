import {
  Given,
  When,
  Then,
  Step
} from "@badeball/cypress-cucumber-preprocessor";
import { landingPage } from '@pages/demo/LandingPage';
import { productPage } from '@pages/demo/ProductPage';
import { miniCartMenu } from "@pages/demo/MiniCartMenu";

Given("customer opens the online shop", () => {
  landingPage.open();
});

Given("customer opens an item", () => {
  landingPage.clickFirstProduct();
})

Given("customer has added an item to shopping cart", () => {
  Step(this, "customer opens an item");
  Step(this, "customer picks a size and color");
  Step(this, "customer clicks 'Add To Cart'");
})

When("customer picks a size and color", () => {
  productPage.clickSizeOption(0);
  productPage.clickColorOption(0);
})

When("customer clicks 'Add To Cart'", () => {
  productPage.addToCart();
  miniCartMenu.getShoppingCartCounter().should('have.text', '1');
})

When("customer clicks the shopping cart button", () => {
  miniCartMenu.clickShoppingCart();
})

Then("customer sees the item in the shopping cart", () => {
  miniCartMenu.getCartItems().should('have.length', 1);
})

When("customer updates the the quantity to {int}", (qty) => {
  miniCartMenu.inputQuantity(99);
  miniCartMenu.updateQuantity();
})

Then("customer sees the updated quantity", () => {
  miniCartMenu.getShoppingCartCounter().should('have.text', '99');
})

When("customer deletes the item", () => {
  miniCartMenu.removeItem();
  miniCartMenu.confirmRemove();
})

When("customer sees the empty shopping cart", () => {
  throw new Error("Force fail!");
  // miniCartMenu.getShoppingCartCounter().should('have.text', '0');

}) 