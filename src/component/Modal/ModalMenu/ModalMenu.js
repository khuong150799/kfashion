import classNames from 'classnames/bind';
import Styles from './modalMenu.module.scss';
import Modal from 'react-modal';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import configs from '~/configs';
import { useCallback } from 'react';
import PropTyles from 'prop-types';

const cx = classNames.bind(Styles);

function ModalMenu({ isOpen = false, onClick }) {
    //trỏ về đầu trang
    const handleScrollTop = useCallback(() => {
        onClick();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Modal isOpen={isOpen}>
            <div className={cx('menu')}>
                <div className={cx('menu__header')}>
                    <AiOutlineMenu className={cx('icon-menu')} />
                    <h6 className={cx('menu__header-title')}>menu</h6>
                </div>
                <div onClick={onClick} className={cx('icon-close')}>
                    <AiOutlineClose />
                </div>
                <ul className={cx('title-list')}>
                    <li>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-1')}
                            to={configs.routes.home}
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-2')}
                            to={configs.routes.shop}
                        >
                            shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-3')}
                            to={configs.routes.categories}
                        >
                            categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-4')}
                            to={configs.routes.sales}
                        >
                            sale
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleScrollTop}
                            className={cx('title-item', 'title-item-5')}
                            to={configs.routes.blog}
                        >
                            blog
                        </Link>
                    </li>
                </ul>
            </div>
        </Modal>
    );
}

ModalMenu.propTyles = {
    isOpen: PropTyles.bool,
    onClick: PropTyles.func,
};

export default ModalMenu;
