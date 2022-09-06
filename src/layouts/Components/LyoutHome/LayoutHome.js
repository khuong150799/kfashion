import classNames from 'classnames/bind';
import styles from './layoutHome.module.scss';
import PropTyles from 'prop-types';

import Header from '../Header/Header';

const cx = classNames.bind(styles);
function LayoutHome({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__header')}>
                <Header
                    className={cx('background-color-header')}
                    classColorText={cx('color-text-header')}
                    classTextShadow={cx('text-shadow-header')}
                />
            </div>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

LayoutHome.propTyles = {
    children: PropTyles.node.isRequired,
};

export default LayoutHome;
