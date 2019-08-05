
import { takeLatest } from 'redux-saga/effects';
import actions from '../shared/actionTypes';
import fetchProductListSaga from './fetchProductListSaga';


export default function* saga() {
    yield takeLatest(actions.FETCH_PRODUCT_LIST, fetchProductListSaga);
}