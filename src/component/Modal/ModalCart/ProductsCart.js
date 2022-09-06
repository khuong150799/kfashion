import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTyles from 'prop-types';
import configs from '~/configs';
import { GrClose } from 'react-icons/gr';
import styles from './modalCart.module.scss';
import { useState, useCallback } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const cx = classNames.bind(styles);

function ProductsCart({ onClick, sale = true, wishlistMobile = false, mobileProductsCart = false }) {
    const [quantity, setQuantity] = useState(1);
    const handleChangeQuantity = useCallback((e) => {
        setQuantity(e.target.value);
    }, []);
    const handleClickAdd = useCallback(() => {
        setQuantity((prev) => parseInt(prev) + 1);
    }, []);
    const handleClickRemove = useCallback((e) => {
        setQuantity((prev) => parseInt(prev) - 1);
    }, []);
    return (
        <div className={cx('product-list')}>
            <div className={cx('product-item')}>
                <Link to={configs.routes.product} onClick={onClick}>
                    <img
                        className={cx('product-item-img')}
                        src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg"
                        alt="images-men"
                    />
                </Link>
                <div className={cx('product-item-content')}>
                    <Link onClick={onClick} to={configs.routes.product}>
                        <span className={cx('product-name')}>Men's classic stretch suit</span>
                    </Link>
                    <div className={cx('quantyti-price')}>
                        {wishlistMobile ? (
                            <span className={cx('stock')}>in Stock</span>
                        ) : mobileProductsCart ? (
                            <div className={cx('quantity-buy')}>
                                <button onClick={handleClickRemove} className={cx('quantity-buy-btn-remove')}>
                                    <IoMdRemove />
                                </button>
                                <input
                                    onChange={handleChangeQuantity}
                                    type="text"
                                    value={quantity}
                                    className={cx('number')}
                                />
                                <button onClick={handleClickAdd} className={cx('quantity-buy-btn-add')}>
                                    <IoMdAdd />
                                </button>
                            </div>
                        ) : (
                            <span className={cx('quantity')}>Quantity: 2</span>
                        )}

                        <div className={cx('price')}>
                            {sale && <h1 className={cx('price-sale')}>$39.00</h1>}
                            <h1 className={cx('price-current')}>$49.00</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('remove-product')}>
                <GrClose />
            </div>
        </div>
    );
}

ProductsCart.propTyles = {
    onClick: PropTyles.func,
    sale: PropTyles.bool,
    wishlistMobile: PropTyles.bool,
};

export default ProductsCart;
