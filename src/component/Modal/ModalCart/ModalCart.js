import classNames from 'classnames/bind';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import PropTyles from 'prop-types';

import styles from './modalCart.module.scss';
import QuickLink from '~/component/QuickLink';
import { Link } from 'react-router-dom';
import configs from '~/configs';
import { categoriesShop } from '~/component/filejs/categoriesShop';
import ProductsCart from './ProductsCart';

Modal.setAppElement(document.getElementById('root'));

const cx = classNames.bind(styles);

function ModalCart({ isOpen = true, onClick }) {
    const product = true;

    return (
        <div onClick={onClick}>
            <Modal isOpen={isOpen} className={cx('modal')}>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={cx('wrapper')}
                >
                    <div className={cx('bag__header')}>
                        <h4 className={cx('bag__header-title')}>shopping bag</h4>
                        <div onClick={onClick} className={cx('close')}>
                            <GrClose />
                        </div>
                    </div>
                    <div className={cx('bag__content')}>
                        {!product ? (
                            <>
                                <p className={cx('bag__header-product')}>No products in the cart</p>
                                <h1 className={cx('bag__content-title')}>start shopping</h1>
                                <ul className={cx('list-title-products')}>
                                    {categoriesShop.map((data, index) => (
                                        <QuickLink
                                            key={index}
                                            to={data.to}
                                            title={data.title}
                                            className={cx('item-title-products')}
                                        />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <ProductsCart onClick={onClick} />
                                <div className={cx('bill_view-cart')}>
                                    <div className={cx('bill')}>
                                        <p className={cx('bill-title')}>suptotal:</p>
                                        <span className={cx('bill-price')}>$595.00</span>
                                    </div>
                                    <Link onClick={onClick} to={configs.routes.cart} className={cx('view-cart')}>
                                        view cart
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

ModalCart.propTyles = {
    isOpen: PropTyles.bool,
    onClick: PropTyles.func,
};

export default ModalCart;
