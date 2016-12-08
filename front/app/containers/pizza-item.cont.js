/**
 * @fileOverview The Pizza Item container.
 */
import { connect } from 'react-redux';

import PizzaItem from '../components/pizza-item.comp';
import { removePizzaItemFromCart } from '../actions/cart.action';

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
    onRemoveFromCart: (pizzaItem) => {
      dispatch(removePizzaItemFromCart(pizzaItem));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaItem);
