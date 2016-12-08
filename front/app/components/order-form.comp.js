/**
 * @fileOverview The Order Form component.
 */

import React from 'react';
import _ from 'underscore';

import pizzaService from '../services/pizza.service';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    /** @type {Object} contains reference to elements */
    this.elements = {};

    this.state = {
      pizzaSizes: [],
      selectedPizzaSize: null,
      toppings: [],
      maxToppings: 0,
      selectedToppings: [],
      maxToppingLimitReached: false,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <form className="order-form">
            { this._renderPizzaSizes() }
            { this._renderPizzaToppings() }
          </form>
        </div>
      </div>
    );
  }

  /**
   * Render pizza sizes.
   */
  _renderPizzaSizes() {
    const {
      pizzaSizes,
    } = this.state;

    return (
      <div>
        {
          pizzaSizes.length > 0 &&
          <div>
            <h2>Order Form:</h2>
            <label>Pizza Size:</label>
            <select className="form-control"
              ref={ (el) => this.elements.pizzaSize = el }>
            {
              pizzaSizes.map((pizzaSize, index) => {
                return (
                  <option key={ index } value={ pizzaSize.name }>
                    { pizzaSize.name } (${ pizzaSize.basePrice })
                  </option>
                );
              })
            }
            </select>
            <button type="button" className="btn btn-primary"
              onClick={ this._onPizzaSizeSelect.bind(this)}>
              Select</button>
          </div>
        }
      </div>
    );
  }

  /**
   *
   */
  _renderPizzaToppings() {
    const {
      toppings,
      maxToppings,
      maxToppingLimitReached,
      selectedToppings,
    } = this.state;

    return (
      <div>
      {
        toppings.length > 0 &&
        <div>
          <h3>Toppings:</h3>
          {
            maxToppings &&
            <p>Max toppings: { maxToppings }</p>
          }
          {
            toppings.map((topping, index) => {
              const isSelected = _.contains(selectedToppings, topping);
              const isDisabled = topping.defaultSelected ||
                (!isSelected && maxToppingLimitReached);

              return (
                <div className="checkbox" key={ index }>
                  <label>
                    <input type="checkbox"
                      defaultChecked={ topping.defaultSelected }
                      disabled={ isDisabled }
                      onChange={ this._onToppingChange.bind(this, index) } />
                    { topping.topping.name } (${ topping.topping.price })
                  </label>
                </div>
              );
            })
          }
          <button type="button" className="btn btn-primary"
            onClick={ this._addPizzaToCart.bind(this) }>Add to Cart!</button>
        </div>
      }
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

  /**
   * Handle pizza size select action.
   */
  _onPizzaSizeSelect() {
    let pizzaSize = this.elements.pizzaSize.value;

    // reset state
    this.setState({
      selectedPizzaSize: pizzaSize,
      toppings: [],
      maxToppings: 0,
      selectedToppings: [],
    });

    // Fetch pizza sizes
    pizzaService
      .fetchPizzaToppings(pizzaSize)
      .then((res) => {
        let data = res.data.data.pizzaSizeByName;

        // set default selected toppings
        let selectedToppings = [];
        _.each(data.toppings, function(topping) {
          if (topping.defaultSelected) {
            selectedToppings.push(topping);
          }
        });

        // update state
        this.setState({
          toppings: data.toppings,
          maxToppings: data.maxToppings,
          selectedToppings: selectedToppings,
        }, () => {
          this._checkMaxToppings();
        });
      })
      .catch((err) => {
        console.log('fetchPizzas() :: Error while loading pizzas:', err);
      });
  }

  /**
   * Handle topping check/uncheck events.
   *
   * @param {Number} index The toppings array index.
   * @param {Object} event The event object.
   */
  _onToppingChange(index, event) {
    let {
      toppings,
      selectedToppings,
    } = this.state;

    const topping = toppings[index];

    // if item is checked, add it to selected toppings
    if (event.target.checked) {
      selectedToppings.push(topping);
    // if item is unchecked, remove it from selected toppings
    } else {
      selectedToppings = _.without(selectedToppings, topping);
    }

    // update state
    this.setState({
      selectedToppings: selectedToppings,
    }, () => {
      this._checkMaxToppings();
    });
  }

  /**
   * Check if max toppings limit has been reached.
   */
  _checkMaxToppings() {
    const {
      maxToppings,
      selectedToppings,
    } = this.state;

    let maxToppingLimitReached = false;

    if (maxToppings !== null && maxToppings > 0
          && selectedToppings.length >= maxToppings) {
      maxToppingLimitReached = true;
    }

    this.setState({
      maxToppingLimitReached: maxToppingLimitReached,
    });
  }

  /**
   * Handle adding pizza to cart.
   */
  _addPizzaToCart() {
    const {
      pizzaSizes,
      selectedPizzaSize,
      selectedToppings,
    } = this.state;

    let pizzaItem = {
      pizzaSize: _.findWhere(pizzaSizes, {name: selectedPizzaSize}),
      toppings: selectedToppings,
    };

    this.props.onAddToCart(pizzaItem);

    // reset form state
    this.setState({
      toppings: [],
      maxToppings: 0,
      selectedToppings: [],
    });
  }
}

/** @const {Object} propTypes definition */
OrderForm.propTypes = {
  onAddToCart: React.PropTypes.func.isRequired,
};
