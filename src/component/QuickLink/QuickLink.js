import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import styles from './quickLink.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function QuickLink({ to, className, title }) {
    return (
        <Link to={to} className={cx(className)}>
            {title}
        </Link>
    );
}

QuickLink.propTyles = {
    to: PropTyles.string,
    className: PropTyles.string,
    title: PropTyles.string,
};

export default QuickLink;
