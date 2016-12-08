/**
 * @fileOverview The Cart component.
 */

import React from 'react';

import PizzaItemCont from '../containers/pizza-item.cont';
import cartService from '../services/cart.service';

export default class Cart extends React.Component {
  render() {
    const {
      pizzaItems,
    } = this.props;

    let totalPrice = cartService.getPizzaItemsPrice(pizzaItems);
    totalPrice = Number(totalPrice).toFixed(2);

    return (
      <div className="row">
        <div className="col-sm-12">
          <h2>Cart:</h2>
          {
            pizzaItems.length === 0 &&
            <p>Empty, order some pizzas!</p>
          }
          {
            pizzaItems.map(function(pizzaItem, index) {
              return (
                <PizzaItemCont key={ index } pizzaItem={ pizzaItem } />
              );
            })
          }
          {
            pizzaItems.length > 0 &&
            <p>Total Cart Price: <strong>${ totalPrice }</strong></p>
          }
        </div>
      </div>
    );
  }
}

/** @const {Object} propTypes definition */
Cart.propTypes = {
  pizzaItems: React.PropTypes.array.isRequired,
};
