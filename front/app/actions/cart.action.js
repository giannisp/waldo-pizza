/**
 * @fileOverview Cart add/remove actions.
 */

import {
  CART_PIZZA_ITEM_ADD,
  CART_PIZZA_ITEM_REMOVE,
} from '../constants/reducer-actions.const';

/**
 * Add a pizza item to the cart.
 *
 * @param {Object} pizzaItem The pizza item object to add.
 * @return {Function} The action handler.
 */
export const addPizzaItemToCart = (pizzaItem) => {
  return function(dispatch) {
    dispatch({
      type: CART_PIZZA_ITEM_ADD,
      pizzaItem,
    });
  };
};

/**
 * Remove a pizza item from the cart.
 *
 * @param {Object} pizzaItem The pizza item object to remove.
 * @return {Function} The action handler.
 */
export const removePizzaItemFromCart = (pizzaItem) => {
  return function(dispatch) {
    dispatch({
      type: CART_PIZZA_ITEM_REMOVE,
      pizzaItem,
    });
  };
};
