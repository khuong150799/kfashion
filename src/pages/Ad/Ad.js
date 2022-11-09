import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import styles from './ad.module.scss';

const cx = classNames.bind(styles);

function Ad() {
    const [valueTitle, setValueTitle] = useState('');
    const [valueDescription, setValueDescription] = useState('');
    const [valuePrice, setValuePrice] = useState('');

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            let data = {};
            if (valueTitle && valueDescription && valuePrice) {
                data.valueTitle = valueTitle;
                data.valueDescription = valueDescription;
                data.valuePrice = valuePrice;
            }
            console.log(data);
        },
        [valueTitle, valueDescription, valuePrice],
    );

    return (
        <form className={cx('form')} action="/action_page.php">
            <label htmlFor="title">Title</label>
            <input
                onChange={(e) => {
                    setValueTitle(e.target.value);
                }}
                type="text"
                id="title"
                name="title"
                placeholder="Title.."
                value={valueTitle}
            />

            <label htmlFor="Description">Description</label>
            <input
                onChange={(e) => {
                    setValueDescription(e.target.value);
                }}
                type="text"
                id="Description"
                name="Description"
                placeholder="Description.."
                value={valueDescription}
            />

            <label htmlFor="price">Price</label>
            <input
                onChange={(e) => {
                    setValuePrice(e.target.value);
                }}
                type="text"
                id="price"
                name="price"
                placeholder="Price.."
                value={valuePrice}
            />

            <button onClick={(e) => handleSubmit(e)} className={cx('btn')}>
                submit
            </button>
        </form>
    );
}

export default Ad;
