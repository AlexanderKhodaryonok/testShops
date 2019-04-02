import {handleActions} from "redux-actions";
import {findIndex, guid} from "../../Services/Secondary functions";
import {
    addProduct,
    addShop,
    editProduct,
    editShop,
    increaseShopsCount,
    productDescriptionOnChange,
    productTitleOnChange,
    setProductId,
    setShopId,
    shopAddressOnChange,
    shopNameOnChange,
    shopWorkingHoursOnChange
} from "../ActionThunksCreators/ShopsPageActionCreators";
import lodash from 'lodash'

let initialState = {
    currentWritingShop: {
        number: null,
        name: '',
        address: '',
        workingHours: '',
    },
    currentWritingProduct: {
        title: '',
        description: '',
    },
    currentProductId: null,
    currentShopId: null,
    shopsCount: 2,
    shops: [
        {
            id: 'shop1qwew',
            number: 1,
            name: 'Amazon',
            address: 'www.amazon.com',
            workingHours: '8-22',
            products: [
                {
                    title: 'Men\'s Northam Step Loafer',
                    description: 'Comfortable shoes for everyday use. 100% leather.',
                    id: '11zadwasdf'
                },
                {
                    title: 'Converse All Star',
                    description: 'Synthetic sole, 100% canvas, canvas upper',
                    id: '12bjpdg'
                },
            ]
        },
        {
            id: 'shop2qwzxc',
            number: 2,
            name: 'E-bay',
            address: 'www.e-bay.com',
            workingHours: '8-23',
            products: [
                {
                    title: 'Samsung Galaxy S8',
                    description: 'Infinity Display: a bezel-less, full-frontal, edge-to-edge screen. Default resolution is Full HD and can be changed to Quad HD plus (WQHD plus) in Settings',
                    id: '21bnmhgfd'
                },
                {
                    title: 'Samsung Galaxy S9',
                    description: 'Super Speed Dual Pixel Camera, IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free',
                    id: '22hgfre'
                },
            ]
        },
    ]
};

const shopPageReducer = handleActions({

    [increaseShopsCount.toString()]: (state, {payload}) => {
        return {...state, shopsCount: payload};
    },

    [setShopId.toString()]: (state, {payload: {id}}) => {
        return {...state, currentShopId: id};
    },

    [setProductId.toString()]: (state, {payload: {id}}) => {
        return {...state, currentProductId: id}
    },

    [addShop.toString()]: (state, {
        payload: {
            shop: {
                number,
                name,
                address,
                workingHours
            }
        }
    }) => {
        let newShop = {
            id: guid(),
            number: state.shopsCount,
            name,
            address,
            workingHours,
            products: []
        };
        let stateCopy = lodash.cloneDeep(state);

        stateCopy.shops = [...state.shops, newShop];
        stateCopy.currentWritingShop.name = '';
        stateCopy.currentWritingShop.address = '';
        stateCopy.currentWritingShop.workingHours = '';

        return stateCopy
    },

    [editShop.toString()]: (state, {
        payload: {
            shop: {
                name,
                address,
                workingHours
            }
        }
    }) => {
        let index = findIndex(state.shops, state.currentShopId);
        let stateCopy = lodash.cloneDeep(state);

        if (/\S/.test(state.currentWritingShop.name) && state.currentWritingShop.name != null) {
            stateCopy.shops[index].name = name;
            stateCopy.currentWritingShop.name = null
        } else {
            stateCopy.shops[index].name = state.shops[index].name
        }
        if (/\S/.test(state.currentWritingShop.address) && state.currentWritingShop.address != null) {
            stateCopy.shops[index].address = address;
            stateCopy.currentWritingShop.address = null
        } else {
            stateCopy.shops[index].address = state.shops[index].address
        }
        if (/\S/.test(state.currentWritingShop.workingHours) && state.currentWritingShop.workingHours != null) {
            stateCopy.shops[index].workingHours = workingHours;
            stateCopy.currentWritingShop.workingHours = null
        } else {
            stateCopy.shops[index].workingHours = state.shops[index].workingHours
        }

        return stateCopy;
    },

    [shopNameOnChange.toString()]: (state, {
        payload: {
            name
        }
    }) => {
        let stateCopy = lodash.cloneDeep(state);
        stateCopy.currentWritingShop.name = name;
        return stateCopy
    },

    [shopWorkingHoursOnChange.toString()]: (state, {
        payload: {
            workingHours
        }
    }) => {
        let stateCopy =  lodash.cloneDeep(state);
        stateCopy.currentWritingShop.workingHours = workingHours;
        return stateCopy
    },

    [shopAddressOnChange.toString()]: (state, {
        payload: {
            address
        }
    }) => {
        let stateCopy =  lodash.cloneDeep(state);
        stateCopy.currentWritingShop.address = address;
        return stateCopy
    },

    [editProduct.toString()]: (state, {
        payload: {
            product: {
                title,
                description
            }
        }
    }) => {
        let shopIndex = findIndex(state.shops, state.currentShopId);
        let productIndex = findIndex(state.shops[shopIndex].products, state.currentProductId);
        let stateCopy =  lodash.cloneDeep(state);

        if (/\S/.test(state.currentWritingProduct.title) && state.currentWritingProduct.title != null) {
            stateCopy.shops[shopIndex].products[productIndex].title = title;
        } else {
            stateCopy.shops[shopIndex].products[productIndex].title = state.shops[shopIndex].products[productIndex].title
        }
        if (/\S/.test(state.currentWritingProduct.description) && state.currentWritingProduct.description != null) {
            stateCopy.shops[shopIndex].products[productIndex].description = description;
        } else {
            stateCopy.shops[shopIndex].products[productIndex].description = state.shops[shopIndex].products[productIndex].description
        }
        stateCopy.currentWritingProduct.title = '';
        stateCopy.currentWritingProduct.description = '';

        return stateCopy
    },

    [addProduct.toString()]: (state, {
        payload: {
            product: {
                title,
                description
            }
        }
    }) => {
        let newProduct = {
            id: guid(),
            title: title,
            description: description
        };

        let shopIndex = findIndex(state.shops, state.currentShopId);
        let stateCopy = lodash.cloneDeep(state);

        stateCopy.shops[shopIndex].products = [newProduct, ...state.shops[shopIndex].products];
        stateCopy.currentWritingProduct.title = '';
        stateCopy.currentWritingProduct.description = '';

        return stateCopy
    },

    [productTitleOnChange.toString()]: (state, {
        payload: {
            title
        }
    }) => {
        let stateCopy = lodash.cloneDeep(state);
        stateCopy.currentWritingProduct.title = title;
        return stateCopy
    },

    [productDescriptionOnChange.toString()]: (state, {
        payload: {
            description
        }
    }) => {
        let stateCopy = lodash.cloneDeep(state);
        stateCopy.currentWritingProduct.description = description;
        return stateCopy
    },
}, initialState);

export default shopPageReducer