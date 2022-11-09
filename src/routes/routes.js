import configs from '~/configs';
import Home from '~/pages/Home';
import Categories, { Bags, Shoes, PageMenOne, PageMenTwo, Jewelry } from '~/pages/Categories';
import Shop, {
    CoatsJackets,
    DownCoats,
    Jeans,
    Jumpers,
    LougnewearPyjamas,
    PageShopOne,
    PageShopThree,
    PageShopTwo,
    Parkas,
    Shirts,
    Shorts,
    Socks,
    SweatShirts,
    Trousers,
    TshirtsTops,
} from '~/pages/Shop';
import Sale from '~/pages/Sale';
import Blog from '~/pages/Blog';
import JoinUs from '~/pages/JoinUs';
import Product from '~/pages/Product';

import LayoutHome from '~/layouts/Components/LyoutHome/LayoutHome';
import WishList from '~/pages/WishList';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import SignIn from '~/pages/SignIn';
import { PageAd } from '~/pages/Ad';

const PublicRouter = [
    //ad
    { path: configs.routes.ad, component: PageAd },
    //home
    { path: configs.routes.home, component: Home, layout: LayoutHome },
    //page of shop
    { path: configs.routes.shop, component: Shop },
    { path: configs.routes.pageShopOne, component: PageShopOne },
    { path: configs.routes.pageShopTwo, component: PageShopTwo },
    { path: configs.routes.pageShopThree, component: PageShopThree },
    { path: configs.routes.pageCoatsJackets, component: CoatsJackets },
    { path: configs.routes.pageJeans, component: Jeans },
    { path: configs.routes.pageLougnewearPyjamas, component: LougnewearPyjamas },
    { path: configs.routes.pageShirts, component: Shirts },
    { path: configs.routes.pageTshirtsTops, component: TshirtsTops },
    { path: configs.routes.pageDownCoats, component: DownCoats },
    { path: configs.routes.pageJumpers, component: Jumpers },
    { path: configs.routes.pageParkas, component: Parkas },
    { path: configs.routes.pageSweatShirt, component: SweatShirts },
    { path: configs.routes.pageShort, component: Shorts },
    { path: configs.routes.pageSocks, component: Socks },
    { path: configs.routes.pageTrousers, component: Trousers },
    //--------------------
    //page of categories
    { path: configs.routes.categories, component: Categories },
    { path: configs.routes.pageMenOne, component: PageMenOne },
    { path: configs.routes.pageMenTwo, component: PageMenTwo },
    { path: configs.routes.pageShoes, component: Shoes },
    { path: configs.routes.pageBags, component: Bags },
    { path: configs.routes.pageJewelry, component: Jewelry },
    //--------------------
    { path: configs.routes.sales, component: Sale },
    { path: configs.routes.blog, component: Blog },
    { path: configs.routes.login, component: SignIn },
    { path: configs.routes.register, component: JoinUs },
    { path: configs.routes.product, component: Product },
    { path: configs.routes.wishList, component: WishList },
    { path: configs.routes.cart, component: Cart },
    { path: configs.routes.checkout, component: Checkout },
];

export { PublicRouter };
