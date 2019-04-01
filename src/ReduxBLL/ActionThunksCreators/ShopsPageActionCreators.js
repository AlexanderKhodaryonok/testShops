import {createAction} from "redux-actions";

export const setShopId = createAction('TEST_APP/SHOPS_PAGE/SET_SHOP_ID');
export const setProductId = createAction('TEST_APP/SHOPS_PAGE/SET_PRODUCT_ID');
export const addProduct = createAction('TEST_APP/SHOPS_PAGE/ADD_PRODUCT');
export const editProduct = createAction('TEST_APP/SHOPS_PAGE/EDIT_PRODUCT');
export const addShop = createAction('TEST_APP/SHOPS_PAGE/ADD_SHOP');
export const editShop = createAction('TEST_APP/SHOPS_PAGE/EDIT_SHOP');
export const shopNameOnChange = createAction('TEST_APP/SHOPS_PAGE/SHOP_NAME_ON_CHANGE');
export const shopAddressOnChange = createAction('TEST_APP/SHOPS_PAGE/SHOP_ADDRESS_ON_CHANGE');
export const shopWorkingHoursOnChange = createAction('TEST_APP/SHOPS_PAGE/SHOP_WORKING_HOURS_ON_CHANGE');
export const productTitleOnChange = createAction('TEST_APP/SHOPS_PAGE/PRODUCT_TITLE_ON_CHANGE');
export const productDescriptionOnChange = createAction('TEST_APP/SHOPS_PAGE/PRODUCT_DESCRIPTION_ON_CHANGE');
export const increaseShopsCount = createAction('TEST_APP/SHOPS_PAGE/INCREASE_SHOPS_COUNT');
