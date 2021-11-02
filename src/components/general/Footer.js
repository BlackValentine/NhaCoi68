import './../../App.css'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="section footer__container container grid">
                <div className="footer__social">
                    <i className="fab fa-facebook footer__icon"></i>
                    <i className="fab fa-instagram footer__icon"></i>
                    <i className="fab fa-pinterest footer__icon"></i>
                    <i className="fab fa-youtube footer__icon"></i>
                </div>

                <div className="footer__info">
                    <h3 className="footer__title">
                        Information
                    </h3>
                    <a href="#1" className="footer__link">My Account</a>
                    <a href="#1" className="footer__link">Track your order</a>
                    <a href="#1" className="footer__link">FAQ</a>
                    <a href="#1" className="footer__link">Contact Us</a>
                    <a href="#1" className="footer__link">Address</a>
                </div>

                <div className="footer__more">
                    <h3 className="footer__title">
                        More From Lokatan
                    </h3>
                    <a href="#1" className="footer__link">Rattan Bag Story</a>
                    <a href="#1" className="footer__link">Our Strength</a>
                    <a href="#1" className="footer__link">Terms of Service</a>
                    <a href="#1" className="footer__link">Privacy Policy</a>
                    <a href="#1" className="footer__link">Refund Policy</a>
                </div>

                <div className="footer__contact">
                    <div className="footer__mail">
                        <h3 className="footer__title">
                            Let's Talk
                        </h3>
                        <a href="#1" className="footer__link">
                            <i className="fas fa-envelope footer__link-icon"></i>
                            nhacoi68@gmail.com
                        </a>
                    </div>
                    <div className="footer__mail">
                        <h3 className="footer__title">
                            Ship From
                        </h3>
                        <div href="#1" className="footer__link">
                            <i className="fas fa-location-arrow footer__link-icon"></i>
                            Hanoi, VietNam
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
