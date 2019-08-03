
import fetchProductList from '../../src/actions/fetchProductList';
import actions from '../../src/shared/actionTypes';

fdescribe('fetchProductList action', () => {
  it('Should return FETCH_PRODUCT_LIST', () => {
    expect(fetchProductList({})).toEqual({
      type: actions.FETCH_PRODUCT_LIST
    });
  });
});