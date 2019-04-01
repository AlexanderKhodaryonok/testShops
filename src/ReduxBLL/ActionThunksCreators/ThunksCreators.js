import {addShop, increaseShopsCount} from "./ShopsPageActionCreators";

export const addShopThunkCreator = (shop) => {
    return (dispatch, getState) => {
        let shopNumber = getState().shopsPage.shopsCount + 1;
        dispatch(increaseShopsCount(shopNumber));
        dispatch(addShop(shop));
    }
};