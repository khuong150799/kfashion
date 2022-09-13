import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './bestSellers.module.scss';
import Product from '~/component/Product';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { memo, useCallback, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function BestSellers({ onClick }) {
    const bestSellersProductRef = useRef();
    const productRef = useRef();
    useEffect(() => {
        bestSellersProductRef.current.scrollLeft = productRef.current.offsetWidth * 2;
    }, []);
    const handleClickPrev = useCallback(() => {
        if (bestSellersProductRef.current.scrollLeft >= productRef.current.offsetWidth) {
            bestSellersProductRef.current.scrollLeft -= productRef.current.offsetWidth;
        }
    }, []);
    const handleClickNext = useCallback(() => {
        bestSellersProductRef.current.scrollLeft += productRef.current.offsetWidth;
    }, []);
    return (
        <div className={cx('bestsellers')}>
            <h2 className={cx('bestsellers__title')}>Bestsellers</h2>
            <div ref={bestSellersProductRef} className={cx('bestsellers__products')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'flex-wrap')}>
                        <div ref={productRef} className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                        <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                            <Product onClick={onClick} />
                        </div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <button onClick={handleClickPrev} className={cx('icon-prev')}>
                        <AiOutlineLeft />
                    </button>
                    <button onClick={handleClickNext} className={cx('icon-next')}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
BestSellers.propTypes = {
    onClick: PropTypes.func,
};
export default memo(BestSellers);
