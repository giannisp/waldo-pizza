/**
 * @fileOverview The Cart container.
 */
import { connect } from 'react-redux';

import Cart from '../components/cart.comp';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    pizzaItems: state.cartPizzaItems,
  };
}

export default connect(
  mapStateToProps
)(Cart);
