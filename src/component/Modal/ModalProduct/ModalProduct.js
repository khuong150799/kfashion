import classNames from 'classnames/bind';
import styles from './modalProduct.module.scss';
import PropTyles from 'prop-types';

import ProductBriefing from '~/component/ProductBriefing';

const cx = classNames.bind(styles);

function ModalProduct({ isOpen, onClick }) {
    return (
        <>
            <ProductBriefing
                isModal={true}
                isOpen={isOpen}
                onClick={onClick}
                productBriefing={false}
                paddingRight={cx('padding-right')}
                classWidth={cx('width-padding-modal')}
                isClose={true}
            />
        </>
    );
}

ModalProduct.propTyles = {
    isOpen: PropTyles.bool,
    onClick: PropTyles.func,
};

export default ModalProduct;
