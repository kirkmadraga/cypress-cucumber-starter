@demo
Feature: Shopping Cart
  Background:
    Given customer opens the online shop

  Scenario: Customer adds an item to shopping cart
    Given customer opens an item
    When customer picks a size and color
    And customer clicks 'Add To Cart'
    And customer clicks the shopping cart button
    Then customer sees the item in the shopping cart

  Scenario: Customer updates the quantity of an item in shopping cart
    Given customer has added an item to shopping cart 
    When customer clicks the shopping cart button
    And customer updates the the quantity to 99
    Then customer sees the updated quantity

  @fail
  Scenario: Customer removes an item from shopping cart
    Given customer has added an item to shopping cart 
    When customer clicks the shopping cart button
    And customer deletes the item
    Then customer sees the empty shopping cart