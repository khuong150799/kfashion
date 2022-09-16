const { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT } = require('./constantAction');

const setProduct = (payload) => {
    return {
        type: SET_PRODUCT,
        payload,
    };
};

const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    };
};

const deleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload,
    };
};

export { addProduct, deleteProduct, setProduct };
