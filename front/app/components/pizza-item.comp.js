/**
 * @fileOverview The Pizza Item component.
 */

import React from 'react';

export default class PizzaItem extends React.Component {
  render() {
    const {
      pizzaItem,
    } = this.props;

    let price = Number(pizzaItem.price).toFixed(2);

    return (
      <div className="col-lg-3 col-sm-12 cart-item">
        <button type="button" className="btn btn-danger"
          onClick={ this._removeFromCart.bind(this) }>Remove from Cart</button>
        <p>{ pizzaItem.pizzaSize.name } (${ pizzaItem.pizzaSize.basePrice })</p>
        {
          pizzaItem.toppings.map((topping, index) => {
            return (
              <ul className="list-unstyled" key={ index }>
                <li>{ topping.topping.name } (${ topping.topping.price })</li>
              </ul>
            );
          })
        }
        <p>Price: <strong>${ price }</strong></p>
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
