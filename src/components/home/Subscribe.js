import './../../App.css'
import './Subscribe.css'

function Subscribe() {
    return (
        <section className="section subscribe" id="subcribe">
            <div className="subscribe__container">
                <img alt="" className="subscribe__img" style={{ backgroundImage: `url('https://vcdn1-giaitri.vnecdn.net/2017/09/16/tui-michael-kors-1505552992.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vXkkk2DjAYinxYmsGZcpHA')` }} />
                <div className="subscribe__content">
                    <h2 className="subscribe__form-title">
                        Subcribe To Our Newsletter
                    </h2>
                    <p className="subscribe__form-subtitle">
                        Don't miss our updates & get 10% OFF coupon
                    </p>
                    <div className="subscribe__form">
                        <input type="email" className="subscribe__input" placeholder="Nhập email của bạn" />
                        <button className="button button--flex">
                            Subscribe
                        </button>
                    </div>
                    <div className="subscribe__commit">
                        We respect your privacy, so we never share your info.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;