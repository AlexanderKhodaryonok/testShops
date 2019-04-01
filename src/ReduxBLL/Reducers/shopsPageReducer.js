import {handleActions} from "redux-actions";
import {findIndex, guid} from "../../Services/Secondary functions";
import {
    addProduct, addShop, editProduct, editShop, increaseShopsCount,
    productDescriptionOnChange,
    productTitleOnChange, setProductId, setShopId, shopAddressOnChange,
    shopNameOnChange, shopWorkingHoursOnChange
} from "../ActionThunksCreators/ShopsPageActionCreators";

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
    shopsCount: 3,
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
        return {
            ...state, shops: [...state.shops, newShop],
            currentWritingShop: {
                ...state.currentWritingShop,
                name: '',
                address: '',
                workingHours: ''
            }
        }
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
        let newState = {
            ...state,
            shops: [
                ...state.shops,
            ],
        };
        if (/\S/.test(state.currentWritingShop.name) && state.currentWritingShop.name != null) {
            newState.shops[index].name = name;
            newState.currentWritingShop.name = null
        } else {
            newState.shops[index].name = state.shops[index].name
        }
        if (/\S/.test(state.currentWritingShop.address) && state.currentWritingShop.address != null) {
            newState.shops[index].address = address;
            newState.currentWritingShop.address = null
        } else {
            newState.shops[index].address = state.shops[index].address
        }
        if (/\S/.test(state.currentWritingShop.workingHours) && state.currentWritingShop.workingHours != null) {
            newState.shops[index].workingHours = workingHours;
            newState.currentWritingShop.workingHours = null
        } else {
            newState.shops[index].workingHours = state.shops[index].workingHours
        }

        return newState;
    },

    [shopWorkingHoursOnChange.toString()]: (state, {
        payload: {
            workingHours
        }
    }) => {
        return {
            ...state, currentWritingShop: {
                ...state.currentWritingShop, workingHours: workingHours
            }
        }
    },

    [shopAddressOnChange.toString()]: (state, {
        payload: {
            address
        }
    }) => {
        return {
            ...state, currentWritingShop: {
                ...state.currentWritingShop, address: address
            }
        }
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
        let newState = {
            ...state,
            shops: [
                ...state.shops = [
                    ...state.shops,
                    ...state.shops.products = []
                ]
            ],
        };
        if (/\S/.test(state.currentWritingProduct.title) && state.currentWritingProduct.title != null) {
            newState.shops[shopIndex].products[productIndex].title = title;
        } else {
            newState.shops[shopIndex].products[productIndex].title = state.shops[shopIndex].products[productIndex].title
        }
        if (/\S/.test(state.currentWritingProduct.description) && state.currentWritingProduct.description != null) {
            newState.shops[shopIndex].products[productIndex].description = description;
        } else {
            newState.shops[shopIndex].products[productIndex].description = state.shops[shopIndex].products[productIndex].description
        }
        newState.currentWritingProduct.title = '';
        newState.currentWritingProduct.description = '';
        return newState
    },

    [addProduct.toString()]: (state, {
        payload: {
            product: {
                title,
                description
            }
        }
    }) => {
        let shopIndex = findIndex(state.shops, state.currentShopId);
        let newProduct = {
            id: guid(),
            title: title,
            description: description
        };
        return {
            ...state,
            ...state.shops[shopIndex].products = [newProduct, ...state.shops[shopIndex].products],
            currentWritingProduct: {
                ...state.currentWritingProduct,
                title: '',
                description: ''
            }
        };
    },

    [productTitleOnChange.toString()]: (state, {
        payload: {
            title
        }
    }) => {
        return {
            ...state, currentWritingProduct: {
                ...state.currentWritingProduct, title: title
            }
        };
    },

    [productDescriptionOnChange.toString()]: (state, {
        payload: {
            description
        }
    }) => {
        return {
            ...state, currentWritingProduct: {
                ...state.currentWritingProduct, description: description
            }
        }
    },

    [shopNameOnChange.toString()]: (state, {
        payload: {
            name
        }
    }) => {
        return {
            ...state, currentWritingShop: {
                ...state.currentWritingShop, name: name
            }
        }
    },

    [productTitleOnChange.toString()]: (state, {
        payload: {
            title
        }
    }) => {
        return {
            ...state, currentWritingProduct: {
                ...state.currentWritingProduct, title: title
            }
        }
    },

    [productDescriptionOnChange.toString()]: (state, {
        payload: {
            description
        }
    }) => {
        return {
            ...state, currentWritingProduct: {
                ...state.currentWritingProduct, description: description
            }
        }
    },
}, initialState);

export default shopPageReducer