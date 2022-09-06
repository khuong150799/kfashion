import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from './formSignInSignUp.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useId, useRef } from 'react';
import { BiCheck } from 'react-icons/bi';
import { validator } from '~/component/validate/validate';
import configs from '~/configs';

const cx = classNames.bind(styles);

function FormSignUpSignIn({ titleForm = '', register = false }) {
    const formId = useId();
    const fullNameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const passwordConfirmId = useId();
    const idMale = useId();
    const idFmale = useId();

    const formRef = useRef();
    const formMessageRef = useRef();
    const formgroupRef = useRef();
    useEffect(() => {
        validator({
            form: `.${formRef.current.className}`,
            formMessage: `.${formMessageRef.current.className}`,
            formgroup: `.${formgroupRef.current.className}`,
            active: `${styles.active}`,
            rules: [
                validator.isRequired('[name="fullname"]', 'please enter this field'),
                validator.isRequired('[name="email"]', 'please enter this field'),
                validator.isEmail('[name="email"]', 'this field is email'),
                validator.isRequired('[name="password"]', 'please enter this field'),
                validator.isMinLength('[name="password"]', 6, 'Please enter 6 or more characters'),
                validator.isRequired('[name="password-confirm"]', 'please enter this field'),
                validator.isConfirmed('[name="password-confirm"]', 'Invalid password', function () {
                    return document.querySelector('[name="password"]').value;
                }),
                validator.isGender('input[name="gender"]', 'please enter this field'),
            ],
            onSubmit: function (data) {
                console.log(data);
            },
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>{titleForm}</h1>
            <form id={formId} ref={formRef} className={cx('form')}>
                {register && (
                    <div className={cx('form-group')}>
                        <input
                            name="fullname"
                            id={fullNameId}
                            type="text"
                            placeholder="First Name + Last Name"
                            className={cx('form-control')}
                        />
                        <span className={cx('form-message')}></span>
                    </div>
                )}
                <div ref={formgroupRef} className={cx('form-group')}>
                    <input
                        name="email"
                        id={emailId}
                        type="email"
                        placeholder="Email address"
                        className={cx('form-control')}
                    />
                    <span ref={formMessageRef} className={cx('form-message')}></span>
                </div>
                <div className={cx('form-group')}>
                    <input
                        name="password"
                        id={passwordId}
                        type="password"
                        placeholder="Password"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>
                {register && (
                    <>
                        <div className={cx('form-group')}>
                            <input
                                name="password-confirm"
                                id={passwordConfirmId}
                                type="password"
                                placeholder="Enter The Password"
                                className={cx('form-control')}
                            />
                            <span className={cx('form-message')}></span>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('gender')}>
                                <input
                                    id={idMale}
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className={cx('inp-gender')}
                                />
                                <label htmlFor={idMale}>
                                    Male <BiCheck className={cx('check-male')} />
                                </label>
                                <input
                                    id={idFmale}
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className={cx('inp-gender')}
                                />
                                <label htmlFor={idFmale}>
                                    Female <BiCheck className={cx('check-female')} />
                                </label>
                            </div>
                            <span className={cx('form-message')}></span>
                        </div>
                    </>
                )}

                {register ? (
                    <>
                        <p className={cx('terms')}>
                            By creating an account, you agree to KFashion's Privacy Policy and Terms of Use.
                        </p>
                        <button className={cx('btn')}>join us</button>
                        <p className={cx('quesion')}>
                            <span>Already a Member?</span>
                            <Link to={configs.routes.login} className={cx('link')}>
                                Sign In.
                            </Link>
                        </p>
                    </>
                ) : (
                    <>
                        <p className={cx('terms')}>
                            By loging in, you agree to KFashion's Privacy Policy and Terms of Use.
                        </p>
                        <button className={cx('btn')}>sign in</button>
                        <p className={cx('quesion')}>
                            <span>Not a Member?</span>
                            <Link to={configs.routes.register} className={cx('link')}>
                                Join Us
                            </Link>
                        </p>
                    </>
                )}
            </form>
        </div>
    );
}

FormSignUpSignIn.propTyles = {
    titleForm: PropTyles.string,
    register: PropTyles.bool,
};

export default FormSignUpSignIn;
