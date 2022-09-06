import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Breadcrumb from '~/component/Breadcrumb';
import Footer from '~/component/Footer';
import { ProductsCart } from '~/component/Modal';
import Table, { BodyTable, HeadTable } from '~/component/Table';
import configs from '~/configs';
import Header from '~/layouts/Components/Header/Header';
import styles from './wishList.module.scss';

const cx = classNames.bind(styles);

function WishList() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <Breadcrumb filterContent={false} filterTitle="My wishlist" breadcrumbText="wishlist" />
                <div className={cx('list-product', 'hide-on-mobile')}>
                    <Table
                        childrenOne={<HeadTable />}
                        childrenTwo={
                            <>
                                <BodyTable />
                                <BodyTable />
                                <BodyTable />
                                <BodyTable />
                                <BodyTable />
                                <BodyTable />
                                <BodyTable />
                            </>
                        }
                    />
                </div>
                {/**---------------wishList------------- */}
                <div className={cx('wishlist-mobile')}>
                    <ProductsCart wishlistMobile />
                    <Link to={configs.routes.cart} className={cx('btn')}>
                        add to cart
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WishList;
