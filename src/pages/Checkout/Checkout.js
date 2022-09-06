import classNames from 'classnames/bind';
import styles from './checkout.module.scss';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Bill from '~/component/Bill';
import Footer from '~/component/Footer';
import Breadcrumb from '~/component/Breadcrumb';
import { useId, useEffect, useRef } from 'react';
import { validator } from '~/component/validate/validate';

const cx = classNames.bind(styles);

function Checkout() {
    const firstNameId = useId();
    const lastNameId = useId();
    const userNameId = useId();
    const emailId = useId();
    const addressId = useId();
    const zipId = useId();
    const townId = useId();
    const countryId = useId();
    const customCheckboxId = useId();

    const formRef = useRef();
    const formMessageRef = useRef();
    const formgroupRef = useRef();

    useEffect(() => {
        validator({
            form: `.${formRef.current.className}`,
            formMessage: `.${formMessageRef.current.className}`,
            formgroup: `.${styles['form-group']}`,
            active: `${styles.active}`,
            rules: [
                validator.isRequired('[name="firstName"]', 'please enter this field'),
                validator.isRequired('[name="lastName"]', 'please enter this field'),
                validator.isRequired('[name="account"]', 'please enter this field'),
                validator.isEmail('[name="email"]', 'please enter this field'),
                validator.isEmail('[name="email"]', 'this field is email'),
                validator.isRequired('[name="street"]', 'please enter this field'),
                validator.isRequired('[name="zip"]', 'please enter this field'),
                validator.isRequired('[name="town"]', 'please enter this field'),
                validator.isRequired('[name="country"]', 'Please select a valid country.'),
            ],
            onSubmit: function (data) {
                console.log(data);
            },
        });
    }, []);
    return (
        <>
            <div className={cx('wrapper')}>
                <Breadcrumb breadcrumbText="checkout" filterTitle="Checkout" filterContent={false} />
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'c-12', 'm-12', 'l-8')}>
                            <form ref={formRef} className={cx('form-info')}>
                                <h6 className={cx('form-title')}>Billing address</h6>
                                <div className={cx('row')}>
                                    <div ref={formgroupRef} className={cx('col', 'c-12', 'm-6', 'l-6', 'form-group')}>
                                        <label className={cx('label-text')} htmlFor={firstNameId}>
                                            First name
                                        </label>
                                        <input
                                            name="firstName"
                                            type="text"
                                            className={cx('form-control')}
                                            id={firstNameId}
                                        />
                                        <span ref={formMessageRef} className={cx('form-message')}></span>
                                    </div>
                                    <div className={cx('col', 'c-12', 'm-6', 'l-6', 'form-group')}>
                                        <label className={cx('label-text')} htmlFor={lastNameId}>
                                            Last name
                                        </label>
                                        <input
                                            name="lastName"
                                            type="text"
                                            className={cx('form-control')}
                                            id={lastNameId}
                                        />
                                        <span className={cx('form-message')}></span>
                                    </div>
                                </div>

                                <div className={cx('form-group')}>
                                    <label className={cx('label-text')} htmlFor={userNameId}>
                                        Account Username
                                    </label>
                                    <input
                                        name="account"
                                        type="text"
                                        className={cx('form-control')}
                                        id={userNameId}
                                        placeholder="Username"
                                    />
                                    <span className={cx('form-message')}></span>
                                </div>

                                <div className={cx('form-group')}>
                                    <label className={cx('label-text')} htmlFor={emailId}>
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        className={cx('form-control')}
                                        id={emailId}
                                        placeholder="you@example.com"
                                    />
                                    <span className={cx('form-message')}></span>
                                </div>

                                <div className={cx('form-group')}>
                                    <label className={cx('label-text')} htmlFor={addressId}>
                                        Street address
                                    </label>
                                    <input
                                        name="street"
                                        type="text"
                                        className={cx('form-control')}
                                        id={addressId}
                                        placeholder="House number and street name"
                                    />
                                    <span className={cx('form-message')}></span>
                                </div>

                                <div className={cx('row')}>
                                    <div className={cx('col', 'c-12', 'm-6', 'l-6', 'form-group')}>
                                        <label className={cx('label-text')} htmlFor={zipId}>
                                            Zip
                                        </label>
                                        <input name="zip" type="text" className={cx('form-control')} id={zipId} />
                                        <span className={cx('form-message')}></span>
                                    </div>
                                    <div className={cx('col', 'c-12', 'm-6', 'l-6', 'form-group')}>
                                        <label className={cx('label-text')} htmlFor={townId}>
                                            Town / City
                                        </label>
                                        <input name="town" type="text" className={cx('form-control')} id={townId} />
                                        <span className={cx('form-message')}></span>
                                    </div>
                                </div>

                                <div className={cx('form-group')}>
                                    <label className={cx('label-text')} htmlFor={countryId}>
                                        Country
                                    </label>
                                    <select name="country" className={cx('form-control')} id={countryId}>
                                        <option value="">Choose...</option>
                                        <option value="vn">VietNam</option>
                                    </select>
                                    <span className={cx('form-message')}></span>
                                </div>

                                <div className={cx('custom-checkbox')}>
                                    <input
                                        type="checkbox"
                                        className={cx('custom-control-input')}
                                        id={customCheckboxId}
                                    />
                                    <label className={cx('label-checkbox')} htmlFor={customCheckboxId}>
                                        Save this information for next time
                                    </label>
                                </div>
                                <div className={cx('confirm')}>
                                    <Link to="/cart" className={cx('return')}>
                                        <AiOutlineLeft className={cx('icon-left')} /> <span>Return to cart</span>
                                    </Link>
                                    <button className={cx('btn-confirm')}>Confirm</button>
                                </div>
                            </form>
                        </div>
                        <Bill titleBill="Your order" checkout />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
