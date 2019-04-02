import {createSelector} from "reselect";

const shopPageSelector = state => state.shopsPage;

export const currentWritingProductSelector = createSelector(shopPageSelector, (shopPage) => shopPage.currentWritingProduct || {});
export const currentProductIdSelector = createSelector(shopPageSelector, shopPage => shopPage.currentProductId || '');
export const currentWritingShopSelector = createSelector(shopPageSelector, shopPage => shopPage.currentWritingShop || {});
export const shopsSelector = createSelector(shopPageSelector, shopPage => shopPage.shops || []);
export const currentShopIdSelector = createSelector(shopPageSelector, shopPage => shopPage.currentShopId || '');

export const shopByIdSelector = createSelector(
    [shopsSelector, currentShopIdSelector],
    (shops, currentShopId) => shops.find(shop => shop.id === currentShopId) || {}
);

export const productsSelector = createSelector(shopByIdSelector, (shop) => shop.products);

// export const productSelector = createSelector(
//     [currentProductIdSelector, shopsSelector],
//     (currentProductId, shops) => {
//         for (let i = 0; i < shops.length; i++) {
//             for (let a = 0; a < shops[i].products.length; a++) {
//                 for (let productKey in shops[i].products[a]) {
//                     if (shops[i].products[a][productKey] === currentProductId) {
//                         return shops[i].products[a]
//                     }
//                 }
//             }
//         }
//     }
// );

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

/*
export const productSelector = createSelector(
    [currentProductIdSelector, shopsSelector],
    (currentProductId, shops) => {
        shops.forEach(shop => {
            shop.products.length &&
                shop.products.filter(
                    product => product.id === currentProductId)
        });
    }
);
 */