import { combineReducers } from 'redux';
import fetchUserDetailsReducer from './fetchUserDetailsReducer';
import productListReducer from './productListReducer';


const reducers = combineReducers({
    fetchUserDetailsReducer,
    productListReducer
});

export default reducers;