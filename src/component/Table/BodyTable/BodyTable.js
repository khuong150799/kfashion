import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from '../table.module.scss';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

function BodyTable({
    cart = false,
    src = 'https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/37-390x520.jpg',
    title,
    price,
    onClick,
}) {
    return (
        <tr className={cx('table__content')}>
            <td className={cx('table__title')}>
                <span onClick={onClick} className={cx('product-remove')}>
                    <GrClose />
                </span>
            </td>
            <td className={cx('table__title', 'product-image')}>
                <Link to={configs.routes.product}>
                    <img className={cx('product-img')} src={src} alt="images-one" />
                </Link>
            </td>
            <td className={cx('table__title')}>
                <Link to={configs.routes.product} className={cx('product-name')}>
                    {title}
                </Link>
            </td>
            <td className={cx('table__title')}>{price}</td>
            {cart ? (
                <>
                    <td className={cx('table__title')}>2</td>
                    <td className={cx('table__title')}>
                        <span className={cx('product-cart')}>$1000.00</span>
                    </td>
                </>
            ) : (
                <>
                    <td className={cx('table__title')}>Stocking</td>
                    <td className={cx('table__title')}>
                        <span className={cx('product-cart')}>add to cart</span>
                    </td>
                </>
            )}
        </tr>
    );
}

BodyTable.propTyles = {
    cart: PropTyles.bool,
    src: PropTyles.string,
    title: PropTyles.string,
    price: PropTyles.string,
    onClick: PropTyles.func,
};

export default BodyTable;
