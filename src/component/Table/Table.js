import classNames from 'classnames/bind';
import styles from './table.module.scss';
import PropTyles from 'prop-types';

const cx = classNames.bind(styles);

function Table({ childrenOne, childrenTwo }) {
    return (
        <table className={cx('table')}>
            <thead>{childrenOne}</thead>
            <tbody>{childrenTwo}</tbody>
        </table>
    );
}

Table.propTyles = {
    childrenOne: PropTyles.node.isRequired,
    childrenTwo: PropTyles.node.isRequired,
};

export default Table;
