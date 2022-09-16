import { StateProductsCart } from './createContextCart';
import PropTyles from 'prop-types';
import { useReducer } from 'react';
import reducerCart, { initStateCart } from './reducerCart';

function ProductCartProvider({ chilren }) {
    const [state, dispatch] = useReducer(reducerCart, initStateCart);
    return <StateProductsCart.Provider value={[state, dispatch]}>{chilren}</StateProductsCart.Provider>;
}

ProductCartProvider.propTyles = {
    chilren: PropTyles.node,
};

export default ProductCartProvider;
