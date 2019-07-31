import { put, call } from 'redux-saga/effects';
import { callAxios } from '../services/api';
import actions from '../shared/actionTypes';
import constant from '../shared/constants';

export default function* fetchUserDetails (){
    try{
        const url = constant.fetchUserDetailsUri;
        const response = yield call(callAxios, url, {}, 'GET');
        console.log('Hello', response)
        yield put({
            type: actions.FETCH_USER_DETAILS_SUCCESS,
            response: response.data
        });
    }
    catch(err){
        yield put({
            type: actions.FETCH_USER_DETAILS_FAILURE,
            response: err
        })
    }
}