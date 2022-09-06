import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import configs from '~/configs';

import styles from './bill.module.scss';

const cx = classNames.bind(styles);

function Bill({ titleBill = 'Cart totals', checkout = false }) {
    const idFlatRate = useId();
    const idNormalShipping = useId();
    return (
        <div className={cx('col', 'c-12', 'm-12', 'l-4')}>
            <div className={cx('bill')}>
                <div className={cx('bill__heading')}>
                    <h2 className={cx('bill__heading-title')}>{titleBill}</h2>
                    {checkout && (
                        <table className={cx('table')}>
                            <thead>
                                <tr className={cx('table__content')}>
                                    <td className={cx('table__title-main-one')}>Product</td>
                                    <td className={cx('table__title-main-two')}>Suptotal</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={cx('table__content')}>
                                    <td className={cx('table__title-one')}>
                                        Men' classic stretch suit - Blue, M <span>x 1</span>
                                    </td>
                                    <td className={cx('table__title-two')}>$1000.00</td>
                                </tr>
                                <tr className={cx('table__content')}>
                                    <td className={cx('table__title-one')}>
                                        Men' classic stretch suit - Blue, M <span>x 1</span>
                                    </td>
                                    <td className={cx('table__title-two')}>$1000.00</td>
                                </tr>
                                <tr className={cx('table__content')}>
                                    <td className={cx('table__title-one')}>
                                        Men' classic stretch suit - Blue, M <span>x 1</span>
                                    </td>
                                    <td className={cx('table__title-two')}>$1000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    <div className={cx('suptotal')}>
                        <p className={cx('suptotal-title')}>Suptotal</p>
                        <p className={cx('suptotal-price')}>$1000.00</p>
                    </div>
                </div>
                <div className={cx('bill__body')}>
                    <div className={cx('shipping')}>
                        <p className={cx('shipping-title')}>Shipping</p>
                        <div className={cx('shipping-type')}>
                            <div className={cx('flat-rate')}>
                                <input id={idFlatRate} type="radio" name="shipping" value="$10.00" />
                                <label className={cx('name-check')} htmlFor={idFlatRate}>
                                    Flat rate: $10.00
                                </label>
                            </div>
                            <div className={cx('normal-shopping')}>
                                <input id={idNormalShipping} type="radio" name="shipping" value="$5.00" />
                                <label className={cx('name-check')} htmlFor={idNormalShipping}>
                                    Normal shipping: $5.00
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('vat')}>
                        <p className={cx('vat-title')}>Vat</p>
                        <p className={cx('vat-price')}>$5.00</p>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('total')}>
                        <p className={cx('total-title')}>Total</p>
                        <h2 className={cx('total-price')}>$1000.00</h2>
                    </div>
                    <Link to={configs.routes.checkout} className={cx('checkout')}>
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}

Bill.propTyles = {
    titleBill: PropTyles.string,
    checkout: PropTyles.bool,
};
export default Bill;
