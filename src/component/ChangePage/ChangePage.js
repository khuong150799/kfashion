import classNames from 'classnames/bind';
import PropTyles from 'prop-types';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import styles from './changePage.module.scss';

const cx = classNames.bind(styles);

function ChangePage({
    pageMain = '',
    supPage = '',
    pageThree = false,
    pageFour = false,
    pageFive = false,
    activeOne = false,
    activeTwo = false,
    activeThree = false,
    activeFour = false,
    activeFive = false,
}) {
    const handleScrollTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Link
                onClick={handleScrollTop}
                to={supPage ? `/${pageMain}/${supPage}/page-one` : `/${pageMain}/page-one`}
                className={cx('page', 'page-one', { [activeOne]: activeOne })}
            >
                1
            </Link>
            <Link
                onClick={handleScrollTop}
                to={supPage ? `/${pageMain}/${supPage}/page-two` : `/${pageMain}/page-two`}
                className={cx('page', 'page-two', { [activeTwo]: activeTwo })}
            >
                2
            </Link>
            {pageThree && (
                <Link
                    onClick={handleScrollTop}
                    to={supPage ? `/${pageMain}/${supPage}/page-three` : `/${pageMain}/page-three`}
                    className={cx('page', 'page-three', { [activeThree]: activeThree })}
                >
                    3
                </Link>
            )}
            {pageFour && (
                <Link
                    onClick={handleScrollTop}
                    to={supPage ? `/${pageMain}/${supPage}/page-four` : `/${pageMain}/page-four`}
                    className={cx('page', 'page-four', { [activeFour]: activeFour })}
                >
                    4
                </Link>
            )}
            {pageFive && (
                <Link
                    onClick={handleScrollTop}
                    to={supPage ? `/${pageMain}/${supPage}/page-five` : `/${pageMain}/page-five`}
                    className={cx('page', 'page-five', { [activeFive]: activeFive })}
                >
                    5
                </Link>
            )}
        </div>
    );
}

ChangePage.propTyles = {
    pageMain: PropTyles.string,
    supPage: PropTyles.string,
    pageThree: PropTyles.bool,
    pageFour: PropTyles.bool,
    pageFive: PropTyles.bool,
    activeOne: PropTyles.bool,
    activeTwo: PropTyles.bool,
    activeThree: PropTyles.bool,
    activeFour: PropTyles.bool,
    activeFive: PropTyles.bool,
};

export default ChangePage;
