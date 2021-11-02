import './../../App.css'
import './Policy.css'

function Policy() {
    return (
        <section className="section policy" id="policy">
            <div className="policy__container container grid">
                <ul className="policy__list">
                    <li className="policy__item">
                        <i className="fas fa-shipping-fast policy__item-icon"></i>
                        <h3 className="policy__item-title">Toàn thế giới, giao hàng nhanh</h3>
                        <p className="policy__item-subtitle">Phí ship chỉ từ 30.000VNĐ</p>
                    </li>
                    <li className="policy__item">
                        <i className="far fa-credit-card policy__item-icon"></i>
                        <h3 className="policy__item-title">Thanh toán an toàn 100%</h3>
                    </li>
                    <li className="policy__item">
                        <i className="fas fa-exchange-alt policy__item-icon"></i>
                        <h3 className="policy__item-title">Chính sách đổi hàng trong 30 ngày</h3>
                        <p className="policy__item-subtitle">Điều khoản và điều kiện áp dụng</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Policy;