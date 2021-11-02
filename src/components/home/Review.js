import './../../App.css'
import './Review.css'

function Review() {
    return (
        <section className="section review" id="review">
            <h2 className="section__title">Reviews của khách hàng</h2>
            <p className="section__subtitle">Bạn có gì muốn chia sẻ với chúng tôi? Inbox ngay cho Team NhàCói68 nhé ^^</p>
            <div className="review__container container grid">
                <ul className="review__list">
                    <li className="review__item">
                        <div className="review__item-header">
                            <div className="review__item-name">JEANNE N.</div>
                            <div className="review__item-star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="review__item-titel">Perfect!</div>
                        <div className="review__item-description">I needed 2 kinds of bags so I asked when they would be available. Several days after, I could order the 4 bags I needed. The shipping was very fast ! Thanks the bags are lovely I will offer them to m'y friends</div>
                        <div className="review__item-footer">
                            Rattan Roundie
                        </div>
                    </li>
                    <li className="review__item">
                        <div className="review__item-header">
                            <div className="review__item-name">HAF E.</div>
                            <div className="review__item-star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="review__item-titel">Excellent Customer Service</div>
                        <div className="review__item-description">
                            The team at Lokatan went above and beyond to help me with my orders, it really felt as though I was dealing with a small team who truly appreciate their customers. Thank you so much for all of your hard work guys and for your patience with my never ending stream of questions! I would highly recommend this company to anyone :-)
                        </div>
                        <div className="review__item-footer">
                            Rattan Roundie Braided
                        </div>
                    </li>
                    <li className="review__item">
                        <div className="review__item-header">
                            <div className="review__item-name">MICHEKE</div>
                            <div className="review__item-star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="review__item-titel">Round we go!</div>
                        <div className="review__item-description">
                            Bought 1st small one for granddaughter & now ordering large round one for me. LOVE♥️ Quality, size, shape, interior and adjustable strap are everything I need. Wish I could get ALL the shapes. There is certainly a variety for everyone ...... and priced right 🥰
                        </div>
                        <div className="review__item-footer">
                            Rattan Roundie Lotus
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Review;