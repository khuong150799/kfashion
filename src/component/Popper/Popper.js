import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from './popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

Popper.propTyles = {
    children: PropTyles.node.isRequired,
};

export default Popper;
