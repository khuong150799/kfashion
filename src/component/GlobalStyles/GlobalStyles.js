import './GlobalStyles.scss';
import PropTyles from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTyles = {
    children: PropTyles.node.isRequired,
};

export default GlobalStyles;
