import classNames from 'classnames/bind';
import { MdLocalPhone } from 'react-icons/md';
import { AiOutlineMail, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('row', 'upto-date_delivery')}>
                    <div className={cx('c-12', 'l-6', 'upto-date')}>
                        <h3 className={cx('upto-date__title')}>keep up to date</h3>
                        <p className={cx('upto-date__suptitles')}>
                            We will keep you posted on new products and great personal offers.
                        </p>
                    </div>
                    <div className={cx('c-12', 'l-6', 'delivery')}>
                        <h3 className={cx('delivery__title')}>
                            intenational delivery <br /> available
                        </h3>
                        <p className={cx('delivery__suptitles')}>free uk shipping for online orders over $350</p>
                    </div>
                </div>
            </div>

            <div className={cx('footer-main')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                            <div className={cx('help')}>
                                <h2 className={cx('help-title')}>help</h2>
                                <a href="tel:+00 88888888" className={cx('phone')}>
                                    <MdLocalPhone className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('white-color')}> +00 8888888</span>
                                </a>
                                <a href="mailto:leduykhuonggcd@gmail.com" className={cx('email')}>
                                    <AiOutlineMail className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('white-color')}>leduykhuonggcd@gmail</span>
                                </a>
                            </div>
                        </div>
                        <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                            <div className={cx('social')}>
                                <h2 className={cx('social-title')}>social</h2>

                                <a href="https://www.facebook.com/leduykhuonggcd" className={cx('social-icon')}>
                                    <FaFacebookF className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('social-text', 'white-color')}>Facebook</span>
                                </a>
                                <a href="https://www.facebook.com/leduykhuonggcd" className={cx('social-icon')}>
                                    <AiOutlineTwitter className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('social-text', 'white-color')}>Twitter</span>
                                </a>
                                <a href="https://www.facebook.com/leduykhuonggcd" className={cx('social-icon')}>
                                    <AiFillInstagram className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('social-text', 'white-color')}>Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/leduykhuonggcd" className={cx('social-icon')}>
                                    <FaLinkedinIn className={cx('mg-r-icon', 'white-color')} />
                                    <span className={cx('social-text', 'white-color')}>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                            <div className={cx('pay')}>
                                <h2 className={cx('pay-title')}>pay</h2>

                                <img
                                    src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/02/payment.png"
                                    alt="pay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
