/**
 * @fileOverview The Cart service, handling cart-related functionality.
 */

import _ from 'underscore';

let cartService = module.exports = {};

/**
 * Calculate pizza item price.
 *
 * @param {Object} pizzaItem The pizza item.
 * @return {Number} The total price.
 */
cartService.getPizzaItemPrice = function(pizzaItem) {
  let price = 0;

  price += pizzaItem.pizzaSize.basePrice;

  _.each(pizzaItem.toppings, function(topping) {
    price += topping.topping.price;
  });

  return price;
};

/**
 * Calculate pizza items price.
 *
 * @param {Array.<Object>} pizzaItems The pizza items.
 * @return {Number} The total price.
 */
cartService.getPizzaItemsPrice = function(pizzaItems) {
  let price = 0;

  _.each(pizzaItems, function(pizzaItem) {
    price += pizzaItem.price;
  });

  return price;
};
