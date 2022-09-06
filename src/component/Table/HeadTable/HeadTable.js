import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from '../table.module.scss';

const cx = classNames.bind(styles);

function HeadTable({ cart = false }) {
    return (
        <tr className={cx('table__content')}>
            <th className={cx('table__title', 'table__title-one')}></th>
            <th className={cx('table__title', 'table__title-two')}></th>
            <th className={cx('table__title', 'table__title-three')}>product name</th>
            <th className={cx('table__title', 'table__title-four')}>price</th>
            {cart ? (
                <>
                    <th className={cx('table__title', 'table__title-five')}>quantity</th>
                    <th className={cx('table__title', 'table__title-six')}>suptotal</th>
                </>
            ) : (
                <>
                    <th className={cx('table__title', 'table__title-five')}>status</th>
                    <th className={cx('table__title', 'table__title-six')}></th>
                </>
            )}
        </tr>
    );
}

HeadTable.propTyles = {
    cart: PropTyles.bool,
};

export default HeadTable;
