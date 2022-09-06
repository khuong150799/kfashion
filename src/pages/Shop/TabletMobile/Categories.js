import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTyles from 'prop-types';
import styles from './tabletMobile.module.scss';

const cx = classNames.bind(styles);

function CategoriesOfPopper({ to, src, alt, title }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={to} className={cx('image')}>
                <img className={cx('img')} src={src} alt={alt} />
            </Link>
            <Link to={to} className={cx('title')}>
                <p>{title}</p>
            </Link>
        </div>
    );
}

CategoriesOfPopper.propTyles = {
    to: PropTyles.string,
    src: PropTyles.string,
    alt: PropTyles.string,
    title: PropTyles.string,
};

export default CategoriesOfPopper;
