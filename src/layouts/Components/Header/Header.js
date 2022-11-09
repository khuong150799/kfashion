import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';

import PopperShop, { PopperAccount, PopperCategories, PopperSale } from '~/layouts/Components/Popper/index';
import styles from './header.module.scss';
import configs from '~/configs';
import { HeartWishList, LogoIcon } from '~/component/iconsSvg/icons';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Search from '../Search';
import { Language, LogOut } from '~/component/iconsSvg/icons';
import { ModalCart } from '~/component/Modal';
import ModalMenu from '~/component/Modal/ModalMenu/ModalMenu';
import { StateProducts } from '~/component/ProductSlice';

const cx = classNames.bind(styles);

function Header({ ...props }) {
    //handle show header when scrollY > 1250
    const [curentProps, setCurrentProps] = useState({ ...props });
    const handleScroll = useCallback(() => {
        if (window.scrollY > 1250) {
            delete props.className;
            delete props.classColorText;
            delete props.classTextShadow;
            setCurrentProps({ ...props });
        } else {
            props.className = 'layoutHome_background-color-header__nA8yo';
            props.classColorText = 'layoutHome_color-text-header__NeJk0';
            props.classTextShadow = 'layoutHome_text-shadow-header__g3sNE';
            setCurrentProps({ ...props });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curentProps]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curentProps]);

    //trỏ về đầu trang
    const handleScrollTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    //handle cart
    const [isOpen, setIsOpen] = useState(false);

    const handleShowCart = useCallback(() => {
        setIsOpen(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    const handleHideCart = useCallback(() => {
        setIsOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    //handle search
    const [search, setSearch] = useState(true);
    const handleIconClose = useCallback(() => {
        if (!!search) {
            delete props.className;
            delete props.classColorText;
            delete props.classTextShadow;
            setCurrentProps({ ...props });
        } else {
            props.className = 'layoutHome_background-color-header__nA8yo';
            props.classColorText = 'layoutHome_color-text-header__NeJk0';
            props.classTextShadow = 'layoutHome_text-shadow-header__g3sNE';
            setCurrentProps({ ...props });
        }
        setSearch((prev) => (prev === true ? false : true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    //handle toggle search
    const searchRef = useRef();
    const handleToggelSearch = useCallback(() => {
        const top = searchRef.current.current.style.top;
        searchRef.current.current.style.top = top === '58px' ? '-1391px' : '58px';
    }, []);

    const login = false;

    //handle Toggel Account
    const arrowRef = useRef();
    const [showAccountTippy, setShowAccountTippy] = useState(false);

    useEffect(() => {
        if (login) {
            const handleHideAccountTippy = () => {
                setShowAccountTippy(false);
                arrowRef.current.style.display = 'none';
            };
            arrowRef.current.style.display = 'none';
            window.addEventListener('click', handleHideAccountTippy);
            return () => window.removeEventListener('click', handleHideAccountTippy);
        }
    }, [login]);
    const handleToggelAccount = useCallback(
        (e) => {
            e.stopPropagation();
            setShowAccountTippy((prev) => (prev === true ? false : true));
            const display = arrowRef.current.style.display;
            arrowRef.current.style.display = display === 'none' ? 'block' : 'none';
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [showAccountTippy],
    );

    //handle modal menu mobile
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleHideModalMenu = useCallback(() => {
        setIsOpenMenu(false);
    }, []);
    const handleShowModalMenu = useCallback(() => {
        setIsOpenMenu(true);
    }, []);

    const MENU_ITEM = [
        {
            icon: <Language />,
            title: 'language',
            children: {
                title: 'language',
                data: [
                    { type: 'language', code: 'en', title: 'enlish' },
                    { type: 'language', code: 'vn', title: 'vietnamese' },
                ],
            },
        },
        {
            icon: <LogOut />,
            title: 'log out',
        },
    ];

    const value = useContext(StateProducts);
    const [stateWishList, dispatchWishList] = value[0];
    const { product, products } = stateWishList;

    return (
        <>
            <div className={cx('wrapper', { [curentProps.className]: curentProps.className })}>
                <header className={cx('header')}>
                    {!login && (
                        <div className={cx('sign-up_sign-in', 'hide-on-tablet-mobile')}>
                            <Link
                                className={cx('sign-up', {
                                    [curentProps.classColorText]: curentProps.classColorText,
                                    [curentProps.classTextShadow]: curentProps.classTextShadow,
                                })}
                                to={configs.routes.register}
                            >
                                Join Us
                            </Link>

                            <Link
                                className={cx('sign-in', {
                                    [curentProps.classColorText]: curentProps.classColorText,
                                    [curentProps.classTextShadow]: curentProps.classTextShadow,
                                })}
                                to={configs.routes.login}
                            >
                                Sign In
                            </Link>
                        </div>
                    )}
                    <div className={cx('menu')}>
                        <div
                            onClick={handleShowModalMenu}
                            className={cx('icon-menu', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                        >
                            <AiOutlineMenu />
                        </div>
                    </div>

                    <Link onClick={handleScrollTop} to={configs.routes.home} className={cx('logo')}>
                        <LogoIcon
                            className={cx('icon-logo', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                        />
                    </Link>

                    <div className={cx('title-list', 'hide-on-mobile')}>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-1', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                            to={configs.routes.home}
                        >
                            home
                        </Link>
                        <PopperShop>
                            <Link
                                onClick={handleScrollTop}
                                className={cx('title-item', 'title-item-2', {
                                    [curentProps.classColorText]: curentProps.classColorText,
                                    [curentProps.classTextShadow]: curentProps.classTextShadow,
                                })}
                                to={configs.routes.shop}
                            >
                                shop
                            </Link>
                        </PopperShop>
                        <PopperCategories>
                            <Link
                                onClick={handleScrollTop}
                                className={cx('title-item', 'title-item-3', {
                                    [curentProps.classColorText]: curentProps.classColorText,
                                    [curentProps.classTextShadow]: curentProps.classTextShadow,
                                })}
                                to={configs.routes.categories}
                            >
                                categories
                            </Link>
                        </PopperCategories>
                        <PopperSale>
                            <Link
                                onClick={handleScrollTop}
                                className={cx('title-item', 'title-item-4', {
                                    [curentProps.classColorText]: curentProps.classColorText,
                                    [curentProps.classTextShadow]: curentProps.classTextShadow,
                                })}
                                to={configs.routes.sales}
                            >
                                sale
                            </Link>
                        </PopperSale>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-5', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                            to={configs.routes.blog}
                        >
                            blog
                        </Link>
                    </div>
                    <div className={cx('actions')}>
                        <button
                            onClick={handleIconClose}
                            className={cx('icon', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                        >
                            {search ? (
                                <div onClick={handleToggelSearch} className={cx('icon-search')}>
                                    <FiSearch />
                                </div>
                            ) : (
                                <div onClick={handleToggelSearch} className={cx('icon-close')}>
                                    <AiOutlineClose />
                                </div>
                            )}
                        </button>
                        <Search ref={searchRef}></Search>
                        {login && (
                            <PopperAccount data={MENU_ITEM} visible={showAccountTippy}>
                                <button
                                    onClick={handleToggelAccount}
                                    className={cx('icon', 'icon-user', 'hide-on-tablet-mobile', {
                                        [curentProps.classColorText]: curentProps.classColorText,
                                        [curentProps.classTextShadow]: curentProps.classTextShadow,
                                    })}
                                >
                                    <AiOutlineUser />
                                    <div ref={arrowRef} className={cx('arrow')}></div>
                                </button>
                            </PopperAccount>
                        )}
                        <Link
                            onClick={handleScrollTop}
                            to={configs.routes.wishList}
                            className={cx('icon', 'icon-heart', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                        >
                            <HeartWishList />
                            {products.length > 0 && <p className={cx('quantity')}>{products.length}</p>}
                        </Link>
                        <button
                            onClick={handleShowCart}
                            className={cx('icon', {
                                [curentProps.classColorText]: curentProps.classColorText,
                                [curentProps.classTextShadow]: curentProps.classTextShadow,
                            })}
                        >
                            <BsBagCheck />
                            <p className={cx('quantity')}>8</p>
                        </button>
                    </div>
                </header>
            </div>

            {/**------------modal---------- */}
            <ModalCart isOpen={isOpen} onClick={handleHideCart} />
            <ModalMenu isOpen={isOpenMenu} onClick={handleHideModalMenu} />
        </>
    );
}

export default Header;
