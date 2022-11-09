import classNames from 'classnames/bind';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';
import { useState, useCallback } from 'react';

import { nextPrevDot, showImage, showSlider } from '~/component/slider/slider';
import { useEffect, useRef } from 'react';
import Product from '~/component/Product';
import Footer from '~/component/Footer';
import ModalProduct from '~/component/Modal/ModalProduct/ModalProduct';
import BestSellers from '~/component/BestSellers';
import configs from '~/configs';

const cx = classNames.bind(styles);

function Home() {
    const timerId = useRef();
    useEffect(() => {
        //auto slider

        timerId.current = setInterval(
            () =>
                showSlider({
                    i: 1,
                    images: `.${styles['slider-img']}`,
                    dots: `.${styles.dot}`,
                    active: styles.active,
                }),
            3000,
        );
        return () => clearInterval(timerId.current);
    }, []);
    const handleNext = () => {
        clearInterval(timerId.current);
        showImage({
            i: 1,
            images: `.${styles['slider-img']}`,
            dots: `.${styles.dot}`,
            active: styles.active,
        });
    };
    const handlePrev = () => {
        clearInterval(timerId.current);
        showImage({
            i: -1,
            images: `.${styles['slider-img']}`,
            dots: `.${styles.dot}`,
            active: styles.active,
        });
    };
    const handleClickDot = (e) => {
        clearInterval(timerId.current);
        nextPrevDot({ e, images: `.${styles['slider-img']}`, dots: `.${styles.dot}`, active: styles.active });
    };

    /**---------modal-------- */

    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const handleHideModal = useCallback(() => {
        setIsOpen(false);
    }, []);
    //trỏ về đầu trang
    const handleScrollTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('slider')}>
                    <div className={cx('container')}>
                        <div className={cx('images')}>
                            <img
                                className={cx('slider-img', 'active')}
                                src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/revslider/fashion-8/home8-slide1.jpg"
                                alt="slider1"
                            />
                            <img
                                className={cx('slider-img')}
                                src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/revslider/fashion-8/home8-slide2.jpg"
                                alt="slider2"
                            />
                            <img
                                className={cx('slider-img')}
                                src="https://www.brooksbrothers.com/feo-cdn/h/6/GQKEKgrnU.jpg"
                                alt="slider3"
                            />
                            <img
                                className={cx('slider-img')}
                                src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/revslider/fashion-8/home8-slide3.jpg"
                                alt="slider4"
                            />
                        </div>
                        <GrPrevious onClick={handlePrev} className={cx('prev')} />
                        <GrNext onClick={handleNext} className={cx('next')} />
                    </div>
                    <div className={cx('dots')}>
                        <span onClick={handleClickDot} className={cx('dot', 'active')} data-index="0"></span>
                        <span onClick={handleClickDot} className={cx('dot')} data-index="1"></span>
                        <span onClick={handleClickDot} className={cx('dot')} data-index="2"></span>
                        <span onClick={handleClickDot} className={cx('dot')} data-index="3"></span>
                    </div>
                </div>
                <div className={cx('banner')}>
                    <div className={cx('grid')}>
                        <div className={cx('row', 'container-row')}>
                            <div className={cx('c-12', 'l-6')}>
                                <div className={cx('arrival')}>
                                    <img
                                        className={cx('arrival-img-one')}
                                        src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/03/banner-9.jpg"
                                        alt="banner arrival one"
                                    />
                                    <div className={cx('arival-content')}>
                                        <div className={cx('title')}>
                                            <h6 className={cx('suptitles')}>new arrival</h6>
                                            <h2 className={cx('main-title')}>suits 2022</h2>
                                        </div>
                                        <Link
                                            onClick={handleScrollTop}
                                            to={configs.routes.shop}
                                            className={cx('btn-shop')}
                                        >
                                            <span className={cx('btn-shop-text')}>shop now</span>
                                            <div className={cx('btn-shop-icon')}>
                                                <BsArrowRight />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('c-12', 'l-6')}>
                                <div className={cx('sale')}>
                                    <img
                                        className={cx('sale-img-one')}
                                        src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/03/banner-10.jpg"
                                        alt="banner sale"
                                    />
                                    <div className={cx('sale-content')}>
                                        <div className={cx('title')}>
                                            <h6 className={cx('suptitles')}>sale</h6>
                                            <h2 className={cx('main-title')}>
                                                all swwimsuits <br />
                                                up to -50%
                                            </h2>
                                        </div>
                                        <Link
                                            onClick={handleScrollTop}
                                            to={configs.routes.sales}
                                            className={cx('btn-shop')}
                                        >
                                            <span className={cx('btn-shop-text')}>shop now</span>
                                            <div className={cx('btn-shop-icon')}>
                                                <BsArrowRight />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('fuatured-products')}>
                    <h2 className={cx('featured-products__title')}>Featured products</h2>
                    <div className={cx('featured-products__products')}>
                        <div className={cx('grid', 'wide', 'padding-screen-1025')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                                <div className={cx('col', 'c-12', 'm-4', 'l-3')}>
                                    <Product color onClick={handleClickIsOpenModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('bestsellers')}>
                    <div className={cx('bestsellers__banner')}>
                        <img
                            className={cx('bestsellers__banner-img')}
                            src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/03/banner-11-1536x640.jpg"
                            alt="banner best sellers"
                        />
                        <div className={cx('bestsellers__banner-content')}>
                            <div className={cx('title')}>
                                <h6 className={cx('suptitles')}>Bestsellers</h6>
                                <h2 className={cx('main-title')}>
                                    The latest men's trends <br /> this season
                                </h2>
                            </div>
                            <Link onClick={handleScrollTop} to="/categories" className={cx('btn-shop')}>
                                <span className={cx('btn-shop-text')}>shop now</span>
                                <div className={cx('btn-shop-icon')}>
                                    <BsArrowRight />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <BestSellers onClick={handleClickIsOpenModal} />
                </div>
                <Footer />
            </div>
            <ModalProduct isOpen={isOpen} onClick={handleHideModal} />
        </>
    );
}

export default Home;
