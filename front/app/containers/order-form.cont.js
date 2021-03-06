/**
 * @fileOverview The Order Form container.
 */
import { connect } from 'react-redux';

import OrderForm from '../components/order-form.comp';
import { addPizzaItemToCart } from '../actions/cart.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(/*state*/) {
  return {

  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    onAddToCart: (pizzaItem) => {
      dispatch(addPizzaItemToCart(pizzaItem));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm);
