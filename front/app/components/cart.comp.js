/**
 * @fileOverview The Cart component.
 */

import React from 'react';

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
              <div key={ index }>{ pizzaItem.size }</div>
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
