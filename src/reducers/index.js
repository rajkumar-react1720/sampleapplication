import { combineReducers } from 'redux';
import fetchUserDetaiilsReducer from './fetchUserDetailsReducer';
import productListReducer from './productListReducer';


const reducers = combineReducers({
    fetchUserDetaiilsReducer,
    productListReducer
});

export default reducers;