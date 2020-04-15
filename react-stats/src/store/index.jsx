import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import statsReducer from './reducers/index.jsx';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
// These consts allows to work with redux devtools and connects store for asynchronic requests
const initialState = {};
// const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const store = createStore(statsReducer, initialState, compose(applyMiddleware(thunk), DevTools));


export default store;
