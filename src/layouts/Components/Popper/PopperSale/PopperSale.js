import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Popper from '~/component/Popper';
import PropTyles from 'prop-types';

import styles from './popperSale.module.scss';

const cx = classNames.bind(styles);

function PopperSale({ children }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[200, 200]}
                render={(attrs) => (
                    <div className={cx('wrapper', 'hide-on-tablet-mobile')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <div className={cx('container')}>
                                <div className={cx('title')}>
                                    <p className={cx('sale')}>sale!</p>
                                    <p className={cx('text')}>up to 50% off</p>
                                </div>
                                <Link to="/sale" className={cx('btn')}>
                                    shop now
                                </Link>
                            </div>
                        </Popper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

PopperSale.propTyles = {
    children: PropTyles.node.isRequired,
};

export default PopperSale;
