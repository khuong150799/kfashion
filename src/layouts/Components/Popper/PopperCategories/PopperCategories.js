import Tippy from '@tippyjs/react/headless';
import { CgMathPlus } from 'react-icons/cg';
import PropTyles from 'prop-types';

import classNames from 'classnames/bind';
import Popper from '~/component/Popper';
import styles from './popperCategories.module.scss';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { categories } from '~/component/filejs/categories';

const cx = classNames.bind(styles);

function PopperCategories({ children }, ref) {
    const handleScrollTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Tippy
                interactive
                delay={[200, 200]}
                zIndex={9999}
                render={(attrs) => (
                    <div className={cx('wrapper', 'hide-on-tablet-mobile')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <div className={cx('popper__categories')}>
                                <div className={cx('grid')}>
                                    <div className={cx('row')}>
                                        {categories.map((data, index) => (
                                            <Link
                                                key={index}
                                                onClick={handleScrollTop}
                                                to={data.to}
                                                className={cx('popper-container', 'l-3')}
                                            >
                                                <div className={cx('popper__categories-image')}>
                                                    <img
                                                        className={cx('popper__categories-img')}
                                                        src={data.src}
                                                        alt={data.alt}
                                                    />
                                                    <CgMathPlus className={cx('plus')} />
                                                </div>
                                                <Link className={cx('title')} to={data.to}>
                                                    {data.title}
                                                </Link>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
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

PopperCategories.propTyles = {
    children: PropTyles.node.isRequired,
};

export default PopperCategories;
