import classNames from 'classnames/bind';
import { forwardRef, useCallback, useId, useImperativeHandle, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '~/component/Product';
import configs from '~/configs';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search({ prop }, ref) {
    const id = useId();
    const searchResult = false;
    const [valueInp, setValueInp] = useState();
    const handleToggelQuickLink = useCallback((e) => {
        setValueInp(e.target.value);
    }, []);

    //wrapper
    const searchRef = useRef();
    useImperativeHandle(ref, () => searchRef);
    return (
        <div ref={searchRef} className={cx('wrapper')}>
            <div className={cx('container-inp')}>
                <label htmlFor={id} className={cx('title')}>
                    SEARCH EVERYTHING
                </label>
                <input
                    onChange={handleToggelQuickLink}
                    id={id}
                    type="text"
                    className={cx('search__inp')}
                    placeholder="TYPE TO SEARCH..."
                />
            </div>
            {!valueInp && (
                <div className={cx('quick-link')}>
                    <header className={cx('link-header')}>QUICKLINKS</header>
                    <ul className={cx('link-list')}>
                        <Link to={configs.routes.pageShirts} className={cx('link-item')}>
                            SHIRTS
                        </Link>
                        <Link to={configs.routes.pageTshirtsTops} className={cx('link-item')}>
                            T-SHIRTS & TOPS
                        </Link>
                        <Link to={configs.routes.pageShort} className={cx('link-item')}>
                            SHORTS
                        </Link>
                        <Link to={configs.routes.pageDownCoats} className={cx('link-item')}>
                            DOWN COATS, JACKETS & VESTS
                        </Link>
                        <Link to={configs.routes.pageJeans} className={cx('link-item')}>
                            JEANS
                        </Link>
                        <Link to={configs.routes.pageCoatsJackets} className={cx('link-item')}>
                            COATS & JACKETS
                        </Link>
                    </ul>
                </div>
            )}
            {searchResult && (
                <div className={cx('grid', 'wide', 'mg-t__product')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                        <div className={cx('col', 'l-2-4')}>
                            <Product />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

Search.propTyles = {};

export default forwardRef(Search);
