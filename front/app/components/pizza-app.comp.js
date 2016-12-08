/**
 * @fileOverview The app root component.
 */

import React from 'react';

import CartCont from '../containers/cart.cont';
import OrderFormCont from '../containers/order-form.cont';

export default class PizzaApp extends React.Component {
  render() {
    return (
      <div className="container">
        <CartCont />
        <OrderFormCont />
      </div>
    );
  }
}
