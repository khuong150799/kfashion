import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT } from './constantAction';

export const initState = {
    product: {},
    products: [],
};

function reducer(state, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case DELETE_PRODUCT:
            const newProducts = [...state.products];
            newProducts.splice(action.payload, 1);
            return {
                ...state,
                products: newProducts,
            };
        default:
            break;
    }
}

export default reducer;
