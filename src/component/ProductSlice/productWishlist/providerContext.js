import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import PropTypes from 'prop-types';
import { StateProducts } from './createContext';
import reducerCart, { initStateCart } from '../productCart/reducerCart';

function ProductsProvider({ children }) {
    const [stateWishList, dispatchWishList] = useReducer(reducer, initState);
    const [stateCart, dispatch] = useReducer(reducerCart, initStateCart);
    const value = [
        [stateWishList, dispatchWishList],
        [stateCart, dispatch],
    ];
    return <StateProducts.Provider value={value}>{children}</StateProducts.Provider>;
}

ProductsProvider.propTyles = {
    children: PropTypes.node,
};

export default ProductsProvider;
