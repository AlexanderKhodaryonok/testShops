import {createSelector} from "reselect";

export const currentWritingProductSelector = state => state.shopsPage.currentWritingProduct;
export const currentProductIdSelector = state => state.shopsPage.currentProductId;
export const currentWritingShopSelector = state => state.shopsPage.currentWritingShop;
export const shopsInformationSelector = state => state.shopsPage.shops;
export const shopsSelector = state => state.shopsPage.shops;
export const currentShopIdSelector = state => state.shopsPage.currentShopId;

export const editShopSelector = createSelector(
    [shopsSelector, currentShopIdSelector],
    (shops, currentShopId) => shops.find(shop => shop.id === currentShopId)
);

export const productsSelector = state => {
    let currentProducts = state.shopsPage.shops.filter(shop => shop.id === state.shopsPage.currentShopId).map(shop => shop.products);
    return currentProducts[0]
};

export const productSelector = createSelector(
    [currentProductIdSelector, shopsSelector],
    (currentProductId, shops) => {
        for (let i = 0; i < shops.length; i++) {
            for (let a = 0; a < shops[i].products.length; a++) {
                for (let productKey in shops[i].products[a]) {
                    if (shops[i].products[a][productKey] === currentProductId) {
                        return shops[i].products[a]
                    }
                }
            }
        }
    }
);