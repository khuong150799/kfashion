import classNames from 'classnames/bind';
import { useCallback, useRef } from 'react';
import CheckBox from '~/component/CheckBox';
import styles from './filters.module.scss';

const cx = classNames.bind(styles);

function Filters() {
    const categoriesMen = [
        'coats & jackets',
        'down coats, jackets & vest',
        'jeans',
        'jumpers & cardigans',
        'loungewear & pyjamas',
        'parkas',
        'shirts',
        'sweatshirts & hoodies',
        'shorts',
        'socks',
        ' t-Shirts & tops',
        'trousers, chinos & sweatpants',
    ];
    const color = ['black', 'blue', 'light blue', 'moss green', 'red', 'tan', 'white', 'yellow'];
    const size = ['size XS', 'size s', 'size m', 'size l', 'size XL', 'size XXL'];
    const categoriesMenList = useRef();
    const handleToggelMen = useCallback(() => {
        const display = categoriesMenList.current.style.display;
        categoriesMenList.current.style.display = display === 'block' ? 'none' : 'block';
        console.log(display);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <h3 className={cx('categories__title')}>Categories</h3>
                <div className={cx('categories__list')}>
                    <div className={cx('categories__list-men')}>
                        <CheckBox onChange={handleToggelMen} label="Men" />
                        <div ref={categoriesMenList} className={cx('categories__list-men-item')}>
                            {categoriesMen.map((item, index) => (
                                <CheckBox key={index} label={item} className={cx('mg-l')} />
                            ))}
                        </div>
                    </div>
                    <CheckBox label="Shoes" />
                    <CheckBox label="Bags" />
                    <CheckBox label="Jewelry" />
                </div>
            </div>
            <div className={cx('color')}>
                <h3 className={cx('color__title')}>Color</h3>
                <div className={cx('color__list')}>
                    {color.map((item, index) => (
                        <CheckBox key={index} label={item} />
                    ))}
                </div>
            </div>
            <div className={cx('size')}>
                <h3 className={cx('size__title')}>Size</h3>
                <div className={cx('size__list')}>
                    {size.map((item, index) => (
                        <CheckBox key={index} label={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filters;
