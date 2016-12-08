/**
 * @fileOverview The Cart Pizza Items reducer.
 */

import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import _ from 'underscore';

import {
  CART_PIZZA_ITEM_ADD,
  CART_PIZZA_ITEM_REMOVE,
} from '../constants/reducer-actions.const';

const initialState = [];

export default handleActions({
  [CART_PIZZA_ITEM_ADD]: (state, action) => {
    let newState = update(state, {
      $push: [action.pizzaItem]
    });

    return newState;
  },

  [CART_PIZZA_ITEM_REMOVE]: (state, action) => {
    let pizzaItemIndex = _.indexOf(state, action.pizzaItem);

    let newState = update(state, {
      $splice: [[pizzaItemIndex, 1]]
    });

    return newState;
  },
}, initialState);
