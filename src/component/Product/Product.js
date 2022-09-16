import classNames from 'classnames/bind';
import styles from './product.module.scss';
import PropTyles from 'prop-types';
import { AiOutlineSearch, AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import configs from '~/configs';
import { StateProducts } from '../ProductSlice';
import { addProduct, setProduct } from '../ProductSlice/productWishlist/action';

const cx = classNames.bind(styles);

function Product({ onClick, sale = true, hot = false, color = false }) {
    const [thumb, setThumb] = useState(
        'https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg',
    );
    const handleToggelThumb = useCallback((e) => {
        setThumb(e.target.dataset.thumb);
    }, []);

    //add, delete product wishlist and cart

    const [state, dispatch] = useContext(StateProducts);
    const { product, products } = state;

    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const [heartRed, setHeartRed] = useState(false);

    const handleToggelHeart = useCallback(() => {
        setHeartRed(true);
        if (!heartRed) {
            const src = imgRef.current.src;
            const title = titleRef.current.innerHTML;
            const price = priceRef.current.innerHTML;
            dispatch(setProduct({ src, title, price }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heartRed]);

    useEffect(() => {
        if (heartRed) {
            dispatch(addProduct(product));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heartRed]);

    return (
        <div className={cx('wrapper-product')}>
            <Link to={configs.routes.product} className={cx('container-product-img')}>
                <img ref={imgRef} className={cx('product-img')} src={thumb} alt="product" />
            </Link>
            <div className={cx('content-product')}>
                <p className={cx('content-product-brand')}>K Fashion</p>
                <Link ref={titleRef} to={configs.routes.product} className={cx('content-product-name')}>
                    Men's classic stretch suit
                </Link>
                <div className={cx('content-product-price')}>
                    {sale && <span className={cx('content-product-price-sale')}>$595.00</span>}
                    <span ref={priceRef}>$695.00</span>
                </div>
                {color && (
                    <div className={cx('color-swatch')}>
                        <div
                            onClick={handleToggelThumb}
                            className={cx('color', 'color-one')}
                            data-thumb="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg"
                        ></div>
                        <div
                            onClick={handleToggelThumb}
                            className={cx('color', 'color-two')}
                            data-thumb="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/50-390x520.jpg"
                        ></div>
                        <div
                            onClick={handleToggelThumb}
                            className={cx('color', 'color-three')}
                            data-thumb="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/6-390x520.jpg"
                        ></div>
                    </div>
                )}
            </div>
            <Tippy delay={[0, 200]} content="Quick view" placement="left">
                <div onClick={onClick} className={cx('search-icon')}>
                    <AiOutlineSearch />
                </div>
            </Tippy>
            <div onClick={handleToggelHeart} className={cx('heart-icon')}>
                {heartRed ? <AiTwotoneHeart className={cx('heart-red')} /> : <AiOutlineHeart />}
            </div>
            {sale && <div className={cx('sale')}>-40%</div>}
            {hot && <div className={cx('hot')}>Hot</div>}
        </div>
    );
}

Product.propTyles = {
    onClick: PropTyles.func,
    sale: PropTyles.bool,
    hot: PropTyles.bool,
    color: PropTyles.bool,
};

export default memo(Product);
