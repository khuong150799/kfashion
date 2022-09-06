import classNames from 'classnames/bind';
import { useState, useCallback, useRef, useId } from 'react';
import Breadcrumb from '~/component/Breadcrumb';
import ProductBriefing from '~/component/ProductBriefing';
import styles from './product.module.scss';
import ModalProduct from '~/component/Modal/ModalProduct/ModalProduct';
import BestSellers from '~/component/BestSellers';
import Footer from '~/component/Footer';
import { AiFillStar } from 'react-icons/ai';
import Comment from '~/component/Comment';
import { FormComment } from '~/component/Form';

const cx = classNames.bind(styles);

function PageProduct() {
    const reviewId = useId();

    const review = true;

    //line
    const lineRef = useRef();
    //description
    const descriptionRef = useRef();
    const handleToggleDescription = useCallback(() => {
        descriptionRef.current.style.display = 'block';
        reviewRef.current.style.display = 'none';
        lineRef.current.style.width = '145px';
        lineRef.current.style.transform = 'translate(-47.4%,-72px)';
    }, []);
    //review
    const reviewRef = useRef();
    const handleToggleReview = useCallback(() => {
        reviewRef.current.style.display = 'block';
        descriptionRef.current.style.display = 'none';
        lineRef.current.style.width = '90px';
        lineRef.current.style.transform = 'translate(107%,-72px)';
    }, []);

    //write review
    const writeReviewRef = useRef();
    const handleToggleFormReview = useCallback(() => {
        const displayWriteReview = writeReviewRef.current.style.display;
        writeReviewRef.current.style.display = displayWriteReview === 'block' ? 'none' : 'block';
    }, []);
    /**---------modal-------- */

    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const handleHideModal = useCallback(() => {
        setIsOpen(false);
    }, []);
    return (
        <>
            <div className={cx('wrapper')}>
                <Breadcrumb
                    filter
                    filterContent={false}
                    titlelink="shop"
                    breadcrumbText="products"
                    filterTitle="Products"
                />
                <ProductBriefing
                    handleScrollToReview={handleToggleReview}
                    id={reviewId}
                    paddingRight={cx('padding-right')}
                />
                <div className={cx('description_review')}>
                    <div className={cx('title')}>
                        <h2 onClick={handleToggleDescription} className={cx('title-description')}>
                            Description
                        </h2>
                        <h2 onClick={handleToggleReview} className={cx('title-review')}>
                            Review
                        </h2>
                    </div>
                    <div ref={lineRef} className={cx('line')}></div>
                    <div ref={descriptionRef} className={cx('description')}>
                        <div className={cx('grid', 'wide')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                                    <div className={cx('description__detail')}>
                                        <h3 className={cx('description__detail-title')}>Description</h3>
                                        <p className={cx('description__detail-paraph')}>
                                            Compellingly grow performance based mindshare through parallel
                                            potentialities. Rapidiously underwhelm top-line catalysts for change before
                                            best-of-breed materials. Competently brand timely catalysts for change
                                            through sustainable systems. Completely expedite ubiquitous bandwidth after
                                            integrated action items. Progressively transform leading-edge supply chains
                                            whereas flexible niche markets.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                                    <div className={cx('description__info')}>
                                        <h3 className={cx('description__info-title')}>Information</h3>
                                        <div className={cx('description__info-content')}>
                                            <div className={cx('shipping')}>
                                                <p className={cx('shipping-title')}>Shipping</p>
                                                <span className={cx('shipping-suptitle')}>
                                                    We currently offer free shipping worldwide on all orders over $100.
                                                </span>
                                            </div>
                                            <div className={cx('size')}>
                                                <p className={cx('size-title')}>Sizing</p>
                                                <span className={cx('size-suptitle')}>
                                                    Fisrt true to size. Do you need size advice?
                                                </span>
                                            </div>
                                            <div className={cx('return')}>
                                                <p className={cx('return-title')}>Return & exchange</p>
                                                <span className={cx('return-suptitle')}>
                                                    If you are not satisfied with purchase you can return it to us
                                                    within 14 days for an exchange or re-fund
                                                </span>
                                            </div>
                                            <div className={cx('assistance')}>
                                                <p className={cx('assistance-title')}>Assistance</p>
                                                <span className={cx('assistance-suptitle')}>
                                                    Contact us on{' '}
                                                    <a className={cx('tel')} href="tel:+84986395114">
                                                        +84986395114
                                                    </a>
                                                    , or email us at{' '}
                                                    <a className={cx('mail')} href="mailto:leduykhuonggcd@gmail.com">
                                                        leduykhuonggcd@gmail.com
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col', 'c-12', 'm-6', 'l-4')}>
                                    <div className={cx('description__specification')}>
                                        <h3 className={cx('description__specification-title')}>Specification</h3>
                                        <table className={cx('table')}>
                                            <thead>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>weight</td>
                                                    <td className={cx('table-value')}>1.20 kg</td>
                                                </tr>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>dimensions</td>
                                                    <td className={cx('table-value')}>120 x 10 50 cm</td>
                                                </tr>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>size</td>
                                                    <td className={cx('table-value')}>Xs S M L Xl XXl</td>
                                                </tr>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>material</td>
                                                    <td className={cx('table-value')}>Polyester</td>
                                                </tr>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>color</td>
                                                    <td className={cx('table-value')}>Black</td>
                                                </tr>
                                                <tr className={cx('table-content')}>
                                                    <td className={cx('table-title')}>brand</td>
                                                    <td className={cx('table-value')}>Gucci</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={reviewId} ref={reviewRef} className={cx('review')}>
                        <h3 className={cx('review__title')}>Customers reviews</h3>
                        <div className={cx('review__suptitle')}>
                            {review && (
                                <>
                                    <div className={cx('review__suptitle-star')}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <div className={cx('review__suptitle-quantyti')}>
                                        <span>5 Review</span>
                                    </div>
                                </>
                            )}
                            <button onClick={handleToggleFormReview} className={cx('btn-write-review')}>
                                Write a review
                            </button>
                        </div>
                        {!review && (
                            <div className={cx('not-review')}>
                                <span>There are no reviews yet</span>
                            </div>
                        )}
                        <div ref={writeReviewRef} className={cx('write-review')}>
                            <p className={cx('write-review-title')}>Add a review</p>
                            <span className={cx('write-review-notes')}>
                                Your email address will not be published. Required fields are marked *
                            </span>
                            <div className={cx('write-review__match-star')}>
                                <span>Your rating *</span>
                                <div className={cx('match-star')}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                            <FormComment />
                        </div>
                        {review && <Comment />}
                    </div>
                </div>
                <BestSellers onClick={handleClickIsOpenModal} />
            </div>
            <Footer />
            <ModalProduct isOpen={isOpen} onClick={handleHideModal} />
        </>
    );
}

export default PageProduct;
