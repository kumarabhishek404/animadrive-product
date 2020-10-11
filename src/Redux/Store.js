import { createStore } from 'redux';
import logReducer from './authnetication/Reducer'

const store = createStore(logReducer);

export default store;