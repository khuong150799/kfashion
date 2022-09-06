import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './defaultLayout.module.scss';
import Header from '../Header/Header';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout;
