/**
 * @fileOverview The Pizza Item component.
 */

import React from 'react';

export default class PizzaItem extends React.Component {
  render() {
    const {
      pizzaItem,
    } = this.props;

    return (
      <div>
        <p>{ pizzaItem.pizzaSize.name }</p>
        <button type="button" onClick={ this._removeFromCart.bind(this) }
          >Remove from Cart</button>
      </div>
    );
  }

  /**
   * Handle remove from cart action.
   */
  _removeFromCart() {
    const {
      pizzaItem,
      onRemoveFromCart,
    } = this.props;

    onRemoveFromCart(pizzaItem);
  }
}

/** @const {Object} propTypes definition */
PizzaItem.propTypes = {
  pizzaItem: React.PropTypes.object.isRequired,
  onRemoveFromCart: React.PropTypes.func.isRequired,
};
