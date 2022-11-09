import classNames from 'classnames/bind';
import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from '~/component/Breadcrumb';
import Footer from '~/component/Footer';
import { ProductsCart } from '~/component/Modal';
import { StateProducts } from '~/component/ProductSlice';
import { deleteProduct } from '~/component/ProductSlice/productWishlist/action';
import Table, { BodyTable, HeadTable } from '~/component/Table';
import configs from '~/configs';
import Header from '~/layouts/Components/Header/Header';
import styles from './wishList.module.scss';

const cx = classNames.bind(styles);

function WishList() {
    const value = useContext(StateProducts);
    const [stateWishList, dispatchWishList] = value[0];
    console.log(stateWishList);

    const { product, products } = stateWishList;

    const handleRemoveProduct = useCallback(
        (index) => {
            dispatchWishList(deleteProduct(index));
        },
        [dispatchWishList],
    );

    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <Breadcrumb filterContent={false} filterTitle="My wishlist" breadcrumbText="wishlist" />
                {products.length > 0 ? (
                    <div className={cx('list-product', 'hide-on-mobile')}>
                        <Table
                            childrenOne={<HeadTable />}
                            childrenTwo={products.map((item, index) => (
                                <BodyTable
                                    key={index}
                                    src={item.src}
                                    title={item.title}
                                    price={item.price}
                                    onClick={(index) => handleRemoveProduct(index)}
                                />
                            ))}
                        />
                    </div>
                ) : (
                    <div className={cx('img-no-cart')}>
                        <img src={require('src/assets/image/no-cart.png')} alt="anh" />
                        <span>No product</span>
                    </div>
                )}

                {/**---------------wishList------------- */}
                {products.length > 0 && (
                    <div className={cx('wishlist-mobile')}>
                        {products.map((item, index) => (
                            <div className={cx('wishlist-mobile-product')}>
                                <ProductsCart
                                    key={index}
                                    src={item.src}
                                    title={item.title}
                                    price={item.price}
                                    handleRemoveProduct={handleRemoveProduct}
                                    wishlistMobile
                                />
                                <Link to={configs.routes.cart} className={cx('btn')}>
                                    add to cart
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default WishList;
