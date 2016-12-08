/**
 * @fileOverview The Order Form container.
 */
import { connect } from 'react-redux';

import OrderForm from '../components/order-form.comp';

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(/*dispatch*/) {
  return {
  };
}

export default connect(
  mapDispatchToProps
)(OrderForm);
