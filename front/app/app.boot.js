/**
 * @fileOverview The front app main entry point.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/root-reducer.redux';
import PizzaApp from './components/pizza-app.comp';

let appBoot = module.exports = {};

appBoot.init = function() {
  console.log('init() :: App starts booting...');

  // check for devToolsExtension
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore;

  // apply thunk and additional middleware if applicable
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create);

  // init store
  const store = createStoreWithMiddleware(rootReducer);

  ReactDom.render(
    <Provider store={ store }>
      <PizzaApp />
    </Provider>, document.getElementById('pizza-app')
  );
};

// init app
appBoot.init();
