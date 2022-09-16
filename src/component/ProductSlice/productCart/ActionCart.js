const { ADD_PRODUCT_CART, SET_PRODUCT_CART, DELETE_PRODUCT_CART } = require('./constantActionCart');

const setProductCart = (payload) => {
    return {
        type: SET_PRODUCT_CART,
        payload,
    };
};

const addProductCart = (payload) => {
    return {
        type: ADD_PRODUCT_CART,
        payload,
    };
};

const deleteProductCart = (payload) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload,
    };
};

export { setProductCart, addProductCart, deleteProductCart };
