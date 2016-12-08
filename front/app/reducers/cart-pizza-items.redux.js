/**
 * @fileOverview The Cart Pizza Items reducer.
 */

import { handleActions } from 'redux-actions';
import update from 'react-addons-update';

const initialState = [];

export default handleActions({
  CART_PIZZA_ITEM_INSERT: (state, action) => {
    let newState = update(state, {
      $unshift: [action.pizzaItem]
    });

    return newState;
  },
}, initialState);
