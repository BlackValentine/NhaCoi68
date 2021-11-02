import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useProductDetail from '../products/hooks/useProductDetail';
import './../../App.css'
import './DetailProduct.css'

function DetailProduct() {
    const { params: { productId } } = useRouteMatch()
    const { product, loading } = useProductDetail(productId)

    if (loading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className="detail section container grid">
            <div className="detail-product">
                <img alt="" className="main-img-product" style={{ backgroundImage: `url(${product.image})` }} />
                <div className="list-img-product">
                    <img alt="" className="item-img-product" style={{ backgroundImage: `url('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239633576_2365630423581321_8787734669653493728_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=8-MwnAc9_iwAX-r99a1&_nc_ht=scontent.fhan6-1.fna&oh=8d2a9651ab037680461dd035500c49c3&oe=6143245C')` }} />
                    <img alt="" className="item-img-product" style={{ backgroundImage: `url('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241423364_2365630486914648_8873960359589214457_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=WTcrZD8EEPcAX8zYIOS&_nc_ht=scontent.fhan6-1.fna&oh=66c33adeec3ca14b0db50257893ca952&oe=61432A29')` }} />
                    <img alt="" className="item-img-product" style={{ backgroundImage: `url('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241555138_2365630603581303_933562593942231967_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=fKohOtmCP58AX_1z34G&tn=SeBt1aJVfq15Hm8U&_nc_ht=scontent.fhan6-1.fna&oh=dda5d25a82d12ab207ca7e4e70c47bcf&oe=6142F916')` }} />
                    <img alt="" className="item-img-product" style={{ backgroundImage: `url('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/240092748_2365630786914618_6101643145671007656_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=zTRBinECqVYAX-VRyov&_nc_ht=scontent.fhan6-1.fna&oh=75907d88a7693a14fda71454d29fe2fc&oe=6142B8E3')` }} />
                    <img alt="" className="item-img-product" style={{ backgroundImage: `url('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239633576_2365630423581321_8787734669653493728_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=8-MwnAc9_iwAX-r99a1&_nc_ht=scontent.fhan6-1.fna&oh=8d2a9651ab037680461dd035500c49c3&oe=6143245C')` }} />
                </div>
            </div>

            <div className="detail-product__info">
                <div className="detail-product__buying">
                    <h3 className="detail-product__name">
                        {product.name}
                    </h3>

                    <div className="detail-product__color">
                        Color:
                        <span className="detail-product__color--type">
                            Brown
                        </span>
                    </div>

                    <div className="detail-product__price">
                        <div className="detail-product__price--old">
                            ${product.oldPrice}
                        </div>
                        <div className="detail-product__price--new">
                            ${product.newPrice}
                        </div>
                    </div>

                    <div className="detail-product__btn">
                        <div className="detail-product__quantity-btn">
                            <button className="detail-product__quantity-btn-subtract">-</button>
                            <input type="text" className="detail-product__quantity" placeholder="1" min="1" pattern="[0-9]*" aria-label="quantity" />
                            <button className="detail-product__quantity-btn-add">+</button>
                        </div>
                        <div className="button button-grid">
                            <div className="detail-product__atc-btn">
                                <i className="fas fa-shopping-cart"></i>
                                <span>Add To Cart</span>
                            </div>
                        </div>
                    </div>

                    <div className="detail-product__info-list">
                        <div className="detail-product__info-item">
                            <div className="detail-product__info-title">Tình trạng sản phẩm:</div>
                            <div className="detail-product__info-subtitle">
                                <span>Còn hàng</span>
                            </div>
                        </div>
                        <div className="detail-product__info-item">
                            <div className="detail-product__info-title">Loại sản phẩm:</div>
                            <div className="detail-product__info-subtitle">{product.type}</div>
                        </div>
                        <div className="detail-product__info-item">
                            <div className="detail-product__info-title">Vendor:</div>
                            <div className="detail-product__info-subtitle">Nhà Cói 68</div>
                        </div>
                        <div className="detail-product__info-item">
                            <div className="detail-product__info-title">Bộ sưu tập:</div>
                            <div className="detail-product__info-subtitle">
                                <NavLink
                                    to='/'
                                    exact
                                >
                                    Trang chủ
                                </NavLink>,
                                <NavLink
                                    to='/collections'
                                    exact
                                >
                                    Bộ sưu  tập
                                </NavLink>,
                                <NavLink
                                    to='/products'
                                    exact
                                >
                                    Cửa Hàng
                                </NavLink>
                            </div>
                        </div>
                        <div className="detail-product__info-item">
                            <div className="detail-product__info-title">Share:</div>
                            <div className="detail-product__info-subtitle">
                                <i className="fab fa-twitter detail-product__info-subtitle-icon"></i>
                                <i className="fab fa-facebook detail-product__info-subtitle-icon"></i>
                                <i className="fab fa-invision detail-product__info-subtitle-icon"></i>
                                <i className="fab fa-pinterest detail-product__info-subtitle-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-product__descrip">
                    <div className="detail-product__descrip-title">
                        <div className="detail-product__descrip-title--wrapper">
                            <h3 className="detail-product__descrip-title-item active-detail">Details</h3>
                            <h3 className="detail-product__descrip-title-item">Shipping & Return</h3>
                            <h3 className="detail-product__descrip-title-item">Reviews</h3>
                        </div>
                    </div>

                    <div className="detail-product__descript-text">
                        <div>
                            <h5>Material:</h5>
                            <p>Natural palm leaf</p>
                        </div>
                        <div>
                            <h5>Measurements:</h5>
                            <p>Head Circumference: 21.6" / 55cm</p>
                        </div>
                        <div>
                            <h5>Description:</h5>
                            <p>
                                Another great product for your summer adventure. This is one of the traditional handmade
                                sunscreen hats. It is made from an Asian palm tree we call it ‘LONTAR’. There is any
                                kind of handicraft made from Lontar, one of them is this sunscreen hat.
                                <br />
                                <br />
                                It helps you protect your beauty from direct sunlight and give you summer vibes outfit.
                                Our palm sunscreen hat gives you tropical looks while covering your face from direct
                                sunlight. It brings you back to the summer every time you wear it.
                                <br />
                                <br />
                                Combine it with your summer outfits and accessories, or you may see our summer
                                collection to boost your confidence.
                                <br />
                                <br />
                                Support local artisan trough your purchase, every Lokatan products are handmade, which
                                makes it special and unique.
                            </p>
                            <p>
                                -
                                <br />
                                We are using 2-4 Days Express Shipping by DHL.
                                <br />
                                Additional charge needed if your place is in a remote area.
                                <br />
                                Buyers are responsible for any customs and import taxes that may apply. We're not
                                responsible for delays due to customs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;