import classNames from 'classnames/bind';
import Breadcrumb from '~/component/Breadcrumb';
import styles from './blog.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';
import Footer from '~/component/Footer';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Breadcrumb filterContent={false} filterTitle="Blog" breadcrumbText="blog" />
                <div className={cx('container')}>
                    <h1 className={cx('header')}>The best ways to change your summer wardrobe into autumn wardrobe</h1>
                    <span className={cx('times')}>July 15, 2022</span>
                    <div className={cx('image-main')}>
                        <img
                            src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/blog-4.jpg"
                            alt="women"
                            className={cx('image-main-img')}
                        />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('paragraph-one')}>
                            <h3 className={cx('content__header')}>
                                Praesent aliquet fringilla mattis. Aenean tristique commodo gravida. Donec vitae commodo
                                mauris, id pharetra dui. Integer tempor nunc sit amet tellus accumsan lobortis.
                            </h3>
                            <h6 className={cx('content__sup-header')}>
                                Aliquam viverra tellus a urna facilisis bibendum. Phasellus maximus varius erat sed
                                molestie. Sed hendrerit ante a orci semper, ut egestas ipsum malesuada. Nunc dictum nisl
                                at vehicula accumsan. Nam fringilla tellus sed ipsum porttitor pellentesque. Sed ornare
                                nunc quis mauris vulputate sodales. Praesent aliquet fringilla mattis. Aenean tristique
                                commodo gravida. Donec vitae commodo mauris, id pharetra dui. Integer tempor nunc sit
                                amet tellus accumsan lobortis.
                            </h6>
                            <div className={cx('content__text')}>
                                <p>
                                    Nunc dictum nisl at vehicula accumsan. Nam fringilla tellus sed ipsum porttitor
                                    pellentesque. Sed ornare nunc quis mauris vulputate sodales. Nullam sollicitudin
                                    lectus dolor, nec mollis augue iaculis ac. Ut massa tortor, facilisis nec blandit
                                    eu, efficitur non mauris. Morbi imperdiet eleifend felis at placerat. Praesent
                                    aliquet fringilla mattis.
                                </p>
                                <p>
                                    Aenean tristique commodo gravida. Donec vitae commodo mauris, id pharetra dui.
                                    Integer tempor nunc sit amet tellus accumsan lobortis. Vivamus tempor, ex id
                                    dignissim sodales, neque est molestie quam, non maximus orci arcu sit amet turpis.
                                    Etiam quam turpis, scelerisque commodo erat nec, luctus maximus nulla. Quisque
                                    suscipit tellus eu nisl tempor tempus. Aliquam erat volutpat. Nunc ut ex quis metus
                                    viverra rhoncus porttitor sit amet sem. Sed condimentum euismod cursus.
                                </p>
                            </div>
                            <ul className={cx('content__list-check')}>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>Maecenas euismod quam nulla, at imperdiet ante pellentesque mattis.</span>
                                </li>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>
                                        Curabitur a facilisis dolor. Vivamus nec faucibus ante, in malesuada nibh.
                                    </span>
                                </li>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>
                                        Maecenas lacus dui, consequat non pretium et, convallis nec nulla. Quisque in
                                        nibh a quam dictum ornare.
                                    </span>
                                </li>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>
                                        Nullam malesuada facilisis felis, ut iaculis erat finibus sit amet. Nulla
                                        facilisi.
                                    </span>
                                </li>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>
                                        Donec vehicula vestibulum ultricies. Aliquam eget venenatis risus, pulvinar
                                        sollicitudin ex.
                                    </span>
                                </li>
                                <li className={cx('content__item-check')}>
                                    <AiOutlineCheck className={cx('icon-check')} />
                                    <span>
                                        Curabitur a facilisis dolor. Vivamus nec faucibus ante, in malesuada nibh.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('paragraph-two')}>
                        <div className={cx('grid', 'wide')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-6')}>
                                    <img
                                        className={cx('sup-img')}
                                        src="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/blog-detail-1.jpg"
                                        alt="men"
                                    />
                                </div>
                                <div className={cx('col', 'l-6')}>
                                    <h3 className={cx('paragraph-two__header')}>
                                        In faucibus ipsum ligula, sed aliquet magna aliquet a. Vivamus mollis arcu eu
                                        dictum euismod.
                                    </h3>
                                    <h6 className={cx('paragraph-two__sup-header')}>
                                        Donec scelerisque consectetur posuere. Curabitur egestas molestie lorem sed
                                        pharetra. Nullam eu orci at nunc dictum rhoncus at vitae dui.
                                    </h6>
                                    <p className={cx('paragraph-two__text')}>
                                        Quisque suscipit tellus eu nisl tempor tempus. Aliquam erat volutpat. Nunc ut ex
                                        quis metus viverra rhoncus porttitor sit amet sem. Sed condimentum euismod
                                        cursus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <h6 className={cx('content__sup-header')}>
                            Nulla gravida massa sit amet imperdiet tincidunt. Pellentesque congue metus ac imperdiet
                            condimentum. Integer varius faucibus nisl sed feugiat. In finibus dui libero, in placerat
                            leo accumsan pretium.
                        </h6>
                        <p className={cx('content__text')}>
                            Aenean tristique commodo gravida. Donec vitae commodo mauris, id pharetra dui. Integer
                            tempor nunc sit amet tellus accumsan lobortis. Vivamus tempor, ex id dignissim sodales,
                            neque est molestie quam, non maximus orci arcu sit amet turpis. Etiam quam turpis,
                            scelerisque commodo erat nec, luctus maximus nulla. Quisque suscipit tellus eu nisl tempor
                            tempus. Aliquam erat volutpat. Nunc ut ex quis metus viverra rhoncus porttitor sit amet sem.
                            Sed condimentum euismod cursus.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
