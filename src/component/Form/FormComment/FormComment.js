import classNames from 'classnames/bind';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import styles from './formComment.module.scss';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { validator } from '~/component/validate/validate';

const cx = classNames.bind(styles);

function FormComment() {
    const nameId = useId();
    const emailId = useId();
    const textareaId = useId();

    const formRef = useRef();
    const formMessageRef = useRef();
    const formgroupRef = useRef();

    const [check, setCheck] = useState(true);

    const handleCheckSale = useCallback(() => {
        setCheck(check === true ? false : true);
    }, [check]);
    useEffect(() => {
        validator({
            form: `.${formRef.current.className}`,
            formMessage: `.${formMessageRef.current.className}`,
            formgroup: `.${formgroupRef.current.className}`,
            active: `${styles.active}`,
            rules: [
                validator.isRequired('[name="name"]', 'please enter this field'),
                validator.isRequired('[name="email"]', 'please enter this field'),
                validator.isEmail('[name="email"]', 'this field is email'),
                validator.isRequired('[name="review"]', 'please enter this field'),
            ],
            onSubmit: function (data) {
                console.log(data);
            },
        });
    }, []);
    return (
        <form ref={formRef} className={cx('form-review')}>
            <div className={cx('inp-name-email')}>
                <div ref={formgroupRef} className={cx('form-group')}>
                    <label htmlFor={nameId} className={cx('form-lable')}>
                        Name *
                    </label>
                    <input id={nameId} type="text" name="name" className={cx('form-control')} />
                    <span ref={formMessageRef} className={cx('form-message')}></span>
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor={emailId} className={cx('form-lable')}>
                        Email *
                    </label>
                    <input id={emailId} type="email" name="email" className={cx('form-control')} />
                    <span className={cx('form-message')}></span>
                </div>
            </div>
            <div className={cx('form-group')}>
                <label htmlFor={textareaId} className={cx('form-lable')}>
                    Your review *
                </label>
                <textarea id={textareaId} name="review" className={cx('textarea')} />

                <span className={cx('form-message')}></span>
            </div>
            <button
                className={cx('question')}
                onClick={(e) => {
                    e.preventDefault();
                    handleCheckSale();
                }}
            >
                {check ? (
                    <ImCheckboxChecked className={cx('question-icon-check')} />
                ) : (
                    <ImCheckboxUnchecked className={cx('question-icon-notCheck')} />
                )}
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </button>
            <button className={cx('submit')}>Submit</button>
        </form>
    );
}

export default FormComment;
