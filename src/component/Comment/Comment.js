import classNames from 'classnames/bind';
import { useCallback, useRef } from 'react';
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import styles from './comment.module.scss';

const cx = classNames.bind(styles);

function Comment() {
    const likeRef = useRef();
    const disLikeRef = useRef();
    const handleToggleColorIconLike = useCallback(() => {
        const colorIcon = likeRef.current.style.color;
        likeRef.current.style.color = colorIcon === 'rgb(40, 138, 217)' ? 'rgb(25, 25, 25)' : 'rgb(40, 138, 217)';
        disLikeRef.current.style.color = 'rgb(25, 25, 25)';
    }, []);
    const handleToggleColorIconDisLike = useCallback(() => {
        const colorIcon = disLikeRef.current.style.color;
        disLikeRef.current.style.color = colorIcon === 'rgb(40, 138, 217)' ? 'rgb(25, 25, 25)' : 'rgb(40, 138, 217)';
        likeRef.current.style.color = 'rgb(25, 25, 25)';
    }, []);
    return (
        <div className={cx('comment')}>
            <div className={cx('comment__avatar-name')}>
                <div className={cx('comment-avatar')}></div>
                <p className={cx('comment-name')}>duy khuong</p>
            </div>
            <span className={cx('comment-content')}>
                I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered
                such a fast order processing.
            </span>
            <div className={cx('rating-star_time')}>
                <div className={cx('rating-star-quantyti')}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <span className={cx('comment-time')}>July 15, 2022</span>
            </div>
            <div className={cx('feedback')}>
                <button onClick={handleToggleColorIconLike} ref={likeRef} className={cx('like')}>
                    <AiOutlineLike className={cx('icon-like')} /> like
                </button>
                <button onClick={handleToggleColorIconDisLike} ref={disLikeRef} className={cx('dislike')}>
                    <AiOutlineDislike className={cx('icon-dislike')} /> dislike
                </button>
            </div>
        </div>
    );
}

export default Comment;
