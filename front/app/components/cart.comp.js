/**
 * @fileOverview The Cart component.
 */

import React from 'react';

import PizzaItemCont from '../containers/pizza-item.cont';

export default class Cart extends React.Component {
  render() {
    const {
      pizzaItems,
    } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

/** @const {Object} propTypes definition */
Cart.propTypes = {
  pizzaItems: React.PropTypes.array.isRequired,
};
