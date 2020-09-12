import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './store/reducer.js';
import axios from 'axios';
/////////////////////////////ROUTING////////////////////////////////
axios.defaults.baseURL = 'https://abs.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

////////////////////////////////////////REDUX//////////////////////////////
const rootReducer=Reducer;

const logger = store => {//store is our store
  return next => {//next is a fn which leads to preceed of action to dispatch
      return action => {//action is the input action
          console.log('[Middleware] Dispatching', action);

          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;//returning this is mandatory for middleware
      }
  }
};

const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
