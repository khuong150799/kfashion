import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import PropTypes from 'prop-types';
import { StateProducts } from './createContext';

function ProductsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return <StateProducts.Provider value={[state, dispatch]}>{children}</StateProducts.Provider>;
}

ProductsProvider.propTyles = {
    children: PropTypes.node,
};

export default ProductsProvider;
