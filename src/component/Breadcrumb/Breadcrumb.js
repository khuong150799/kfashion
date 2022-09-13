import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from './breadcrumb.module.scss';
import { Link } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr';
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { memo, useCallback, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import configs from '~/configs';
import { categoriesShop } from '../filejs/categoriesShop';
import { categories } from '../filejs/categories';
import { CategoriesOfPopper } from '~/pages/Shop';

const cx = classNames.bind(styles);

function Breadcrumb({
    titlelink,
    breadcrumbText,
    filterTitle,
    filter = true,
    filterContent = true,
    onClick,
    showFilter = false,
    mobileTabletCategoriesShop = false,
    mobileTabletCategories = false,
}) {
    const [visible, setVisible] = useState(false);
    const [check, setCheck] = useState(false);

    const handleVisible = useCallback(
        (e) => {
            e.stopPropagation();
            setVisible(visible === false ? true : false);
        },
        [visible],
    );
    useEffect(() => {
        const handleHideVisibel = () => {
            setVisible(false);
        };
        window.addEventListener('click', handleHideVisibel);
        return () => window.removeEventListener('click', handleHideVisibel);
    }, []);

    //check sale
    const handleCheckSale = useCallback(() => {
        setCheck(check === true ? false : true);
    }, [check]);
    //value popper sort

    const [valueSort, setValueSort] = useState('Latest');
    const handleValueSort = useCallback(
        (e) => {
            setValueSort(e.target.innerHTML);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [valueSort],
    );
    return (
        <div className={cx('breadcrumb')}>
            <div className={cx('breadcrumb-link')}>
                <Link to={configs.routes.home} className={cx('breadcrumb-text')}>
                    Home
                </Link>
                {titlelink && (
                    <>
                        <GrFormNext className={cx('breadcrumb-icon')} />
                        <Link to={`/${titlelink}`} className={cx('breadcrumb-text')}>
                            {titlelink}
                        </Link>
                    </>
                )}
                {breadcrumbText && <GrFormNext className={cx('breadcrumb-icon')} />}
                <p className={cx('breadcrumb-text')}>{breadcrumbText}</p>
            </div>
            {mobileTabletCategoriesShop && (
                <div className={cx('moible-tablet__categories')}>
                    <div className={cx('grid')}>
                        <div className={cx('row', 'flex-wrap')}>
                            {categoriesShop.map((data, index) => (
                                <div key={index} className={cx('col', 'c-3', 'm-2')}>
                                    <CategoriesOfPopper to={data.to} src={data.src} alt={data.alt} title={data.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {mobileTabletCategories && (
                <div className={cx('moible-tablet__categories')}>
                    <div className={cx('grid')}>
                        <div className={cx('row', 'flex-wrap')}>
                            {categories.map((data, index) => (
                                <div key={index} className={cx('col', 'c-3', 'm-2')}>
                                    <CategoriesOfPopper to={data.to} src={data.src} alt={data.alt} title={data.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {filter && (
                <div className={cx('filter')}>
                    <h1 className={cx('filter-title')}>{filterTitle}</h1>
                    {filterContent && (
                        <div className={cx('filter-content')}>
                            <div onClick={onClick} className={cx('filter-icon')}>
                                {showFilter ? (
                                    <AiOutlineClose className={cx('filter-icon-filter')} />
                                ) : (
                                    <MdOutlineFilterAlt className={cx('filter-icon-filter')} />
                                )}
                                <p>Filter</p>
                            </div>
                            <div className={cx('filter-sale')} onClick={handleCheckSale}>
                                {check ? (
                                    <ImCheckboxChecked className={cx('filter-icon-check')} />
                                ) : (
                                    <ImCheckboxUnchecked className={cx('filter-icon-notCheck')} />
                                )}
                                <p>Show only products on sale</p>
                            </div>
                            <div className={cx('filter-sort')}>
                                <p className={cx('filter-sort-text')}>Sort by</p>
                                <Tippy
                                    visible={visible}
                                    interactive
                                    zIndex="9999"
                                    render={(attrs) => (
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className={cx('wrapper-tippy')}
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            <button onClick={handleValueSort} className={cx('filter-select-option')}>
                                                Latest
                                            </button>
                                            <button onClick={handleValueSort} className={cx('filter-select-option')}>
                                                Popularity
                                            </button>
                                            <button onClick={handleValueSort} className={cx('filter-select-option')}>
                                                Price: low to high
                                            </button>
                                            <button onClick={handleValueSort} className={cx('filter-select-option')}>
                                                Price: high to low
                                            </button>
                                        </div>
                                    )}
                                >
                                    <div className={cx('filter-select')}>
                                        <p onClick={handleVisible} className={cx('filter-select-item')}>
                                            {valueSort}
                                        </p>
                                        <AiOutlineDown onClick={handleVisible} className={cx('filter-select-down')} />
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

Breadcrumb.propTypes = {
    breadcrumbText: PropTypes.string,
    filterTitle: PropTypes.string,
    titlelink: PropTyles.string,
    filter: PropTyles.bool,
    filterContent: PropTyles.bool,
    onClick: PropTyles.func,
    showFilter: PropTyles.bool,
    mobileTabletCategoriesShop: PropTyles.bool,
    mobileTabletCategories: PropTyles.bool,
};

export default memo(Breadcrumb);
