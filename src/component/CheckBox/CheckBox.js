import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import { useId } from 'react';
import styles from './checkBox.module.scss';

const cx = classNames.bind(styles);

function CheckBox({ label, className, onChange }) {
    const inputId = useId();

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <input onChange={onChange} id={inputId} type="checkbox" className={cx('checkbox')} />
            <label htmlFor={inputId} className={cx('label')}>
                {label}
            </label>
        </div>
    );
}

CheckBox.propTyles = {
    label: PropTyles.string,
    className: PropTyles.string,
    onChange: PropTyles.func,
};

export default CheckBox;
