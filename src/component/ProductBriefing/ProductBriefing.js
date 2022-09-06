import classNames from 'classnames/bind';
import styles from './productBriefing.module.scss';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PropTyles from 'prop-types';

import { SoleIn24h } from '~/component/iconsSvg/icons';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { FaShoppingCart, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineMail, AiOutlineTwitter, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import { useCallback, useState, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import configs from '~/configs';

Modal.setAppElement(document.getElementById('root'));

const cx = classNames.bind(styles);

function ProductBriefing({
    isModal = false,
    onClick,
    handleScrollToReview,
    isOpen = false,
    productBriefing = true,
    paddingRight,
    classWidth,
    isClose = false,
    id = ':rb:',
    sale = true,
    color = true,
}) {
    //-------------------chọn ảnh---------------------
    const [src, setSrc] = useState('https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg');
    const [alt, setAlt] = useState('image1');
    const handleClickSrc = useCallback((e) => {
        setAlt(e.target.alt);
        setSrc(e.target.src);
    }, []);

    //---------------------xét số lượng--------------------
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

    //----------------------xét màu-----------------------
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const handleCheckOne = useCallback(() => {
        setCheckOne(checkOne === true ? false : true);
    }, [checkOne]);

    const handleCheckTwo = useCallback(() => {
        setCheckTwo(checkTwo === true ? false : true);
    }, [checkTwo]);
    const handleCheckThree = useCallback(() => {
        setCheckThree(checkThree === true ? false : true);
    }, [checkThree]);

    //---------------------chọn size---------------------
    const [showClearSize, setShowClearSize] = useState(false);
    const handleMatchSize = useCallback((e) => {
        e.target.style.borderColor = ' #191919';
        setShowClearSize(true);
    }, []);

    //------clear--------
    const sizeMRef = useRef();
    const sizeLRef = useRef();
    const sizeXlRef = useRef();
    const handleClearSize = useCallback(() => {
        sizeMRef.current.style.borderColor = '#999999';
        sizeLRef.current.style.borderColor = '#999999';
        sizeXlRef.current.style.borderColor = '#999999';
        setShowClearSize(false);
    }, []);
    const handleClearColor = useCallback(() => {
        setCheckOne(false);
        setCheckTwo(false);
        setCheckThree(false);
    }, []);

    ///---------Link or buuton
    const [ElementLinkOrButton, setElementLinkOrButton] = useState('button');
    const handleLinkOrButton = useCallback(() => {
        if (ElementLinkOrButton === 'button') {
            setElementLinkOrButton(Link);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ElementLinkOrButton]);

    //--------------------------------------
    let Component = 'div';
    let Element = 'p';
    const props = {};
    if (isModal) {
        Component = Modal;
        props.isOpen = isOpen;
        Element = Link;
    }

    return (
        <div onClick={onClick}>
            <Component {...props}>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={cx('wrapper', { [classWidth]: classWidth })}
                >
                    <div className={cx('grid')}>
                        <div className={cx('row')}>
                            <div className={cx('images', 'col', 'c-12', 'm-12', 'l-6')}>
                                <ul className={cx('images-children-list', { [paddingRight]: paddingRight })}>
                                    <li className={cx('images-children-item')}>
                                        <img
                                            onClick={handleClickSrc}
                                            className={cx('images-children-item-img')}
                                            src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg"
                                            alt="image1"
                                        />
                                    </li>
                                    <li className={cx('images-children-item')}>
                                        <img
                                            onClick={handleClickSrc}
                                            className={cx('images-children-item-img')}
                                            src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/50-390x520.jpg"
                                            alt="image2"
                                        />
                                    </li>
                                    <li className={cx('images-children-item')}>
                                        <img
                                            onClick={handleClickSrc}
                                            className={cx('images-children-item-img')}
                                            src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/6-390x520.jpg"
                                            alt="image3"
                                        />
                                    </li>
                                </ul>
                                <div className={cx('images-main')}>
                                    <img src={src} alt={alt} className={cx('images-main-item')} />
                                </div>
                            </div>

                            {/**-----------------------image content--------------------- */}
                            <div className={cx('content', 'col', 'c-12', 'm-12', 'l-6')}>
                                <Link to={configs.routes.home} className={cx('brand')}>
                                    K Fashion
                                </Link>
                                <Element to={configs.routes.product} className={cx('product-name')}>
                                    Men’s classic long sleeves shirt
                                </Element>
                                <div className={cx('review')}>
                                    <div className={cx('star')}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <div className={cx('quantity-review')}>
                                        <span>8 Review</span>
                                    </div>
                                    <a
                                        onClick={handleScrollToReview}
                                        href={`/shop/products#${id}`}
                                        className={cx('write-review')}
                                    >
                                        Write a review
                                    </a>
                                </div>
                                <div className={cx('product-code')}>
                                    <span>product code</span>
                                    <p className={cx('product-code-name')}>PG9EHX</p>
                                </div>
                                <div className={cx('price')}>
                                    {sale && <h1 className={cx('price-sale')}>$39.00</h1>}
                                    <h1 className={cx('price-current')}>$49.00</h1>
                                </div>

                                {/**------------------------------------color -----------------------------*/}
                                {color && (
                                    <div className={cx('match-color')}>
                                        <p>color</p>
                                        <div className={cx('color-swatch')}>
                                            <div onClick={handleCheckOne} className={cx('color', 'color-one')}>
                                                {checkOne && <BiCheck className={cx('icon-check')} />}
                                                <BiCheck className={cx('icon-check-hover')} />
                                            </div>
                                            <div onClick={handleCheckTwo} className={cx('color', 'color-two')}>
                                                {checkTwo && <BiCheck className={cx('icon-check')} />}
                                                <BiCheck className={cx('icon-check-hover')} />
                                            </div>
                                            <div onClick={handleCheckThree} className={cx('color', 'color-three')}>
                                                {checkThree && <BiCheck className={cx('icon-check')} />}
                                                <BiCheck className={cx('icon-check-hover')} />
                                            </div>
                                            <span onClick={handleClearColor} className={cx('clear')}>
                                                {checkOne || checkTwo || checkThree ? (
                                                    <>
                                                        <AiOutlineClose className={cx('icon-clear')} />
                                                        <span>clear</span>
                                                    </>
                                                ) : (
                                                    ''
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/**------------------------------------size -----------------------------*/}
                                <div className={cx('container-size')}>
                                    <p>size</p>
                                    <div className={cx('match-size')}>
                                        <div ref={sizeMRef} onClick={handleMatchSize} className={cx('size', 'size-m')}>
                                            M
                                        </div>
                                        <div ref={sizeLRef} onClick={handleMatchSize} className={cx('size', 'size-l')}>
                                            L
                                        </div>
                                        <div
                                            ref={sizeXlRef}
                                            onClick={handleMatchSize}
                                            className={cx('size', 'size-xl')}
                                        >
                                            XL
                                        </div>
                                        <span onClick={handleClearSize} className={cx('clear')}>
                                            {showClearSize && (
                                                <>
                                                    <AiOutlineClose className={cx('icon-clear')} />
                                                    <span>clear</span>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('quantity-sale')}>
                                    <SoleIn24h className={cx('quantity-sale-icon')} />
                                    <span>3 sold in last 24 hours</span>
                                </div>
                                <div className={cx('quantity-buy')}>
                                    <span>quantity</span>
                                    <div className={cx('quantity-buy-btn-add-cart')}>
                                        <div className={cx('quantity-buy-btn')}>
                                            <button
                                                onClick={handleClickRemove}
                                                className={cx('quantity-buy-btn-remove')}
                                            >
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
                                        <button className={cx('add-cart')}>
                                            <FaShoppingCart />
                                            <h3 className={cx('add-cart-text')}>Add to cart</h3>
                                        </button>
                                    </div>
                                </div>
                                {productBriefing && (
                                    <>
                                        <Link to={configs.routes.checkout} className={cx('btn-buy')}>
                                            Buy it now
                                        </Link>
                                        <div className={cx('single-product-button-share')}>
                                            <div className={cx('single-product-button')}>
                                                <ElementLinkOrButton
                                                    // {...propsLinkOrButton}
                                                    to="/wishlist"
                                                    onClick={handleLinkOrButton}
                                                    className={cx('heart')}
                                                >
                                                    {ElementLinkOrButton === 'button' ? (
                                                        <>
                                                            <AiOutlineHeart />
                                                            <span className={cx('heart-text')}>Add to wishlist</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <AiOutlineHeart className={cx('icon-heart')} />
                                                            <span className={cx('heart-text')}>Browse wishlist</span>
                                                        </>
                                                    )}
                                                </ElementLinkOrButton>
                                                <a href="mailto:leduykhuonggcd@gmail.com" className={cx('contact')}>
                                                    <AiOutlineMail />
                                                    <span className={cx('contact-text')}>leduykhuonggcd@gmail</span>
                                                </a>
                                            </div>
                                            <div className={cx('social-share')}>
                                                <a
                                                    href="https://www.facebook.com/leduykhuonggcd"
                                                    className={cx('social-icon')}
                                                >
                                                    <FaFacebookF />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/leduykhuonggcd"
                                                    className={cx('social-icon')}
                                                >
                                                    <AiOutlineTwitter />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/leduykhuonggcd"
                                                    className={cx('social-icon')}
                                                >
                                                    <AiFillInstagram />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/leduykhuonggcd"
                                                    className={cx('social-icon')}
                                                >
                                                    <FaLinkedinIn />
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/**close */}
                    {isClose && (
                        <div onClick={onClick} className={cx('close')}>
                            <AiOutlineClose />
                        </div>
                    )}
                </div>
            </Component>
        </div>
    );
}

ProductBriefing.propTyles = {
    isModal: PropTyles.bool,
    onClick: PropTyles.func,
    handleScrollToReview: PropTyles.func,
    isOpen: PropTyles.bool,
    productBriefing: PropTyles.bool,
    paddingRight: PropTyles.string,
    classWidth: PropTyles.string,
    isClose: PropTyles.bool,
    id: PropTyles.string,
    sale: PropTyles.bool,
    color: PropTyles.bool,
};

export default ProductBriefing;
