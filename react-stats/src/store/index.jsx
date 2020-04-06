
import statsReducer from './reducers/index.jsx';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
// These consts allows to work with redux devtools and connects store for asynchronic requests
const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(statsReducer, compose(applyMiddleware(thunk), DevTools));


export default store;
