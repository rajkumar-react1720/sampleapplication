import fetchProductListSaga from '../../src/sagas/fetchProductListSaga';
import actions from '../../src/shared/actionTypes';
import { testSaga } from 'redux-saga-test-plan';
import { callFetchApi } from '../../src/services/api';

describe('fetchProductListSaga', () => {
  let saga;
  let url = 'http://localhost:7000/getProductList';

  it('should return FETCH_PRODUCT_LIST_SUCCESS', () => {
    saga = testSaga(fetchProductListSaga);

    const response = { data: [] };
    saga
      .next()
      .call(callFetchApi, url, null, 'GET')
      .next(response)
      .put({
        type: actions.FETCH_PRODUCT_LIST_SUCCESS,
        data: [],
      })
      .next()
      .isDone();
  });


  it('should return FETCH_PRODUCT_LIST_FAILURE', () => {
    saga = testSaga(fetchProductListSaga);

    saga
      .next()
      .call(callFetchApi, url, null, 'GET')
      .throw(new Error('Error'))
      .put({
        type: actions.FETCH_PRODUCT_LIST_FAILURE,
        error: new Error('Error'),
      })
      .next()
      .isDone();
  });

});