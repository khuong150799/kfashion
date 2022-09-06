import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTyles from 'prop-types';

import styles from './popperShop.module.scss';
import Popper from '~/component/Popper';
import QuickLink from '~/component/QuickLink';
import { categoriesShop } from '~/component/filejs/categoriesShop';

const cx = classNames.bind(styles);

function PopperShop({ children }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[200, 200]}
                zIndex={9999}
                render={(attrs) => (
                    <div className={cx('wrapper-tippy', 'hide-on-tablet-mobile')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <div className={cx('popper__shop')}>
                                <ul className={cx('popper__shop-list')}>
                                    {categoriesShop.map((data, index) => (
                                        <QuickLink
                                            key={index}
                                            to={data.to}
                                            title={data.title}
                                            className={cx('popper__shop-item')}
                                        />
                                    ))}
                                </ul>
                                <div className={cx('popper__shop-image')}></div>
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

PopperShop.propTyles = {
    children: PropTyles.node.isRequired,
};

export default PopperShop;
