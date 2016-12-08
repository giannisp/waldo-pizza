/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import cartPizzaItems from './cart-pizza-items.redux';

export default combineReducers({
  cartPizzaItems,
});
