/**
 * @fileOverview The Pizza service, handling all XHR requests.
 */

import axios from 'axios';

let pizzaService = module.exports = {};

const baseUrl = 'https://core-graphql.dev.waldo.photos/pizza';

/**
 * Fetch pizza sizes.
 *
 * @return {Promise} The axios request promise.
 */
pizzaService.fetchPizzaSizes = function() {
  let query = `{
    pizzaSizes {
      name
      basePrice
    }
  }`;

  return this.fetch(query);
};

/**
 * Fetch pizza toppings by size.
 *
 * @param {String} pizzaSize The pizzaSize to fetch toppings for.
 * @return {Promise} The axios request promise.
 */
pizzaService.fetchPizzaToppings = function(pizzaSize) {
  let query = `{
    pizzaSizeByName(name: "${pizzaSize}") {
      maxToppings
      toppings {
    	  topping {
    	    name
    	    price
    	  }
       defaultSelected
      }
    }
  }`;

  return this.fetch(query);
};

pizzaService.fetch = function(query) {
  let data = {query: query};

  return axios.post(baseUrl, data);
};
