import productListReducer from '../../src/reducers/productListReducer';
import actions from '../../src/shared/actionTypes';



describe('Fetch ProdcutList Reducer', () => {
  it('should store ProdcutList  on FETCH_PRODUCT_LIST_SUCCESS', () => {
    expect(
      productListReducer(
        { data: [] },
        {
          type: actions.FETCH_PRODUCT_LIST_SUCCESS,
          payload: {
            sku: '423424243432',
            imageUrl: 'iPhoneXr_Red',
            brand: 'Apple',
            price: '$41.66/mo',
            model: 'iPhone® XR',
            contract: 'For 24 months, 0% APR',
            retailPrice: '$999.99'
          },
        },
      ),
    ).toEqual({
      data: [
        {
          sku: '423424243432',
          imageUrl: 'iPhoneXr_Red',
          brand: 'Apple',
          price: '$41.66/mo',
          model: 'iPhone® XR',
          contract: 'For 24 months, 0% APR',
          retailPrice: '$999.99'
        },
      ],
    });
  });
});