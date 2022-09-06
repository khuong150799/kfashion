import classNames from 'classnames/bind';
import Breadcrumb from '~/component/Breadcrumb';
import styles from './shop.module.scss';
import Product from '~/component/Product';
import ModalProduct from '~/component/Modal/ModalProduct/ModalProduct';
import { useState, useCallback, useRef } from 'react';
import Footer from '~/component/Footer';
import Filters from '~/component/Filters';
import ChangePage from '~/component/ChangePage';

const cx = classNames.bind(styles);

function Shop() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const handleHideModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    //toggel filter
    const filterRef = useRef();
    const [showFilter, setShowFilter] = useState(false);
    const handleToggelFilter = useCallback(() => {
        const width = filterRef.current.style.width;
        const translateX = filterRef.current.style.transform;

        filterRef.current.style.width = width === '242px' ? '0px' : '242px';
        filterRef.current.style.transform = translateX === 'translateX(0px)' ? 'translateX(-316px)' : 'translateX(0px)';
        setShowFilter((prev) => (prev === true ? false : true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showFilter]);
    return (
        <>
            <div className={cx('wrapper')}>
                <Breadcrumb
                    showFilter={showFilter}
                    onClick={handleToggelFilter}
                    breadcrumbText="shop"
                    filterTitle="Shop"
                    mobileTabletCategoriesShop
                />
                <div className={cx('container')}>
                    <div ref={filterRef} className={cx('filters')}>
                        <Filters />
                    </div>
                    <div className={cx('products')}>
                        <div className={cx('grid')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product onClick={handleClickIsOpenModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ChangePage pageMain="Shop" pageThree />
            </div>

            <Footer />
            {/**-------modal------- */}
            <ModalProduct isOpen={isOpen} onClick={handleHideModal} />
        </>
    );
}

export default Shop;
