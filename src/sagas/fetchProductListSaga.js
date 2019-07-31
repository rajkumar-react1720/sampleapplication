import { put, call } from 'redux-saga/effects';
import { callAxios } from '../services/api';
import actions from '../shared/actionTypes';
import constant from '../shared/constants';

export default function* fetchProdcutListSaga (){
    try{
        const url = constant.fetchUserDetailsUri;
        const response = constant.testResponse;
        console.log('Hello products', response)
        yield put({
            type: actions.FETCH_PRODUCT_LIST_SUCCESS,
            response: response
        });
    }
    catch(err){
        yield put({
            type: actions.FETCH_PRODUCT_LIST_FAILURE,
            response: err
        })
    }
}