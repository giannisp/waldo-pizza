/**
 * @fileOverview The Order Form component.
 */

import React from 'react';

import pizzaService from '../services/pizza.service';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaSizes: [],
    };
  }

  render() {
    return (
      <div>
        <h2>Order Form:</h2>

      </div>
    );
  }

  /**
   * Handle componentDidMount.
   */
  componentDidMount() {
    // Fetch pizza sizes
    pizzaService
      .fetchPizzaSizes()
      .then((res) => {
        this.setState({
          pizzaSizes: res.data.data.pizzaSizes,
        });
      })
      .catch((err) => {
        console.log('fetchPizzas() :: Error while loading pizzas:', err);
      });
  }
}

/** @const {Object} propTypes definition */
OrderForm.propTypes = {};
