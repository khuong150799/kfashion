import classNames from 'classnames/bind';
import Bill from '~/component/Bill';
import Breadcrumb from '~/component/Breadcrumb';
import Footer from '~/component/Footer';
import { ProductsCart } from '~/component/Modal';
import Table, { BodyTable, HeadTable } from '~/component/Table';
import styles from './cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Breadcrumb breadcrumbText="shopping cart" filterTitle="Shopping Cart" filterContent={false} />
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'm-12', 'l-8', 'hide-on-mobile')}>
                            <Table
                                childrenOne={<HeadTable cart />}
                                childrenTwo={
                                    <>
                                        <BodyTable cart />
                                        <BodyTable cart />
                                        <BodyTable cart />
                                        <BodyTable cart />
                                        <BodyTable cart />
                                    </>
                                }
                            />
                        </div>
                        <div className={cx('col', 'c-12', 'product-cart')}>
                            <div className={cx()}>
                                <ProductsCart mobileProductsCart />
                            </div>
                        </div>
                        <Bill />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
