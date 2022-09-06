import classNames from 'classnames/bind';
import styles from './popperAccount.module.scss';
import PropTyles from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const cx = classNames.bind(styles);

function PopperAccount({ data, children, visible }) {
    const [history, setHistory] = useState([{ data }]);
    const currentItems = history[history.length - 1];
    const renderItem = () => {
        return currentItems.data.map((item, index) => {
            const isChildren = !!item.children;
            return (
                <div
                    onClick={() => {
                        if (isChildren) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                        //  else {
                        //     onChange(item);
                        // }
                    }}
                    key={index}
                    className={cx('language')}
                >
                    <span className={cx('language-icon')}>{item.icon}</span>
                    <button className={cx('popper-account-item')}>{item.title}</button>
                </div>
            );
        });
    };
    return (
        <div>
            <Tippy
                zIndex={10}
                visible={visible}
                interactive
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
                render={(attrs) => (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={cx('popper-account', 'hide-on-table-mobile')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        {history.length > 1 && (
                            <div className={cx('header-language')}>
                                <button
                                    onClick={() => {
                                        setHistory((prev) => prev.splice(history.length - 1, 1));
                                    }}
                                    className={cx('icon-back')}
                                >
                                    <AiOutlineLeft />
                                </button>
                                <h4 className={cx('title-language')}>{currentItems.title}</h4>
                            </div>
                        )}
                        {renderItem()}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

PopperAccount.propTyles = {
    data: PropTyles.node.isRequired,
    children: PropTyles.node.isRequired,
    visible: PropTyles.bool,
};

export default PopperAccount;
