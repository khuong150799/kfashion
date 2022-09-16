const { SET_PRODUCT_CART, ADD_PRODUCT_CART, DELETE_PRODUCT_CART } = require('./constantActionCart');

export const initStateCart = {
    productCart: {},
    productsCart: [],
};

function reducerCart(state, action) {
    console.log(initStateCart);
    switch (action.type) {
        case SET_PRODUCT_CART:
            return {
                ...state,
                productCart: action.payload,
            };
        case ADD_PRODUCT_CART:
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload],
            };
        case DELETE_PRODUCT_CART:
            const newProducts = [...state.productsCart];
            newProducts.splice(action.payload, 1);
            return {
                ...state,
                productCart: newProducts,
            };

        default:
            break;
    }
}

export default reducerCart;
