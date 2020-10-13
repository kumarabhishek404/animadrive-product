import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './Components/Cart/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './Redux/Store'


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);