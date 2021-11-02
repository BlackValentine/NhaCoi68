import { NavLink } from 'react-router-dom';
import './../../App.css'
import './Trending.css'

function Trending() {
    return (
        <section className="section trending" id="trending">
            <h2 className="section__title">Trending Products</h2>
            <p className="section__subtitle">Top view in this week</p>
            <div className="trending__container container grid">
                <ul className="trending__list">
                    <li className="trending__item">
                        <NavLink
                            to='/products/1'
                            exact
                        >
                            <img alt="" className="trending__img" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/qpr0Ps4GNFX4VTH7SfyCAuDGScZAVdCs-qjcr8fVcv6h2oNxEEqltJPmO3O6PPWtmxUjsj0ia55aMCmqlwwrJo4PBXTYV51wZmmUyD4egvyOAp6kUNcKIWSsguyGaORtqMmvb6CZ3qi2t5KRoHzxhc1BKDPFvVR9mg-QEZtQc4xDP-UUyNhhIBtrr-krq20NRqO8-YMXm6TRI2NKQ24PvlpxOnrzDLrHQKoaboiSibP1tigA1TGBWEnuKBfSNgtodQmjybVox4gv7ZiZQZO0AHYsgS3EDTbyACVQdaxKobOMTNoLeQAw8vfb7pT3XHXgA4Spi9Bhi3tE1h2J2JsDVit3a3IiUlKinmZgus6GFJKUW3tneJAPlT4wJochnySKlFAI8VBDdKPNBUDbu9RB5GylnvIgydfFCljG6ExaFiC3lgwpP9QivhAalckBIek-Cgkq9U6p0eTz9BbjsE95aEBBDuAQon08xGIGXsFEy9ct2xaVnvW1k2CGmllLn_f8w-v4hF20g3C47F0sB3kf567qsDwi3PD8v9apQuEF2eMxEItnZFS8X6VSAiKR_gSPjZOZOO9YnntiGZiPXkLMto3vYfodxyv63MvXMn7S4nRd-BoZ10J3Gz5u6kk9VHNvVoyQSsNPu0bwKUi32UjiPOHBMPIQPkMYuKr80aixZJe4nmAmHrfNDN6oT-_edS8KPVsqNfRdfvEy1HaUt65LE2Wf=s836-no?authuser=0')` }} />
                            <h4 className="trending__sale">Sale</h4>
                            <div className="trending__icon-list">
                                <i className="fas fa-shopping-cart trending__icon"></i>
                                <i className="fas fa-search trending__icon"></i>
                            </div>

                            <div className="trending__product-name">
                                Túi mây balo
                            </div>
                        </NavLink>
                        <div className="trending__price">
                            <span className="trending__price-old">
                                $28.00
                            </span>
                            From:
                            <span className="trending__price-new">
                                $22.40
                            </span>
                        </div>
                    </li>
                    <li className="trending__item">
                        <NavLink
                            to='/products/2'
                            exact
                        >
                            <img alt="" className="trending__img" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/7TlFYi1KSo66nszJdqYNMTr811vxHMR70_KGfAbyyvd5ihxZUir7nKF12YuGJxYNJXuaRZXHqUBsze2Od_RuLNJ5K8czAGOgLMBok2NE9-YWcVaYPd1pmR1ZBtoubie1KIiYCrHLc_kevWKeae1-qax0Gl0dJkHIQ4EeCuLGHXIISTbe8aUK54B3dT4dmC-XCjRWXqzBx4MKZzG9doGka47ekQBgcg-VdpNQeUOZ5OWtHhGz2yAQfr_fuUBcM6WhmiJOt15dM1BlBp2Pe5rwcVgAq7qzG7swZC_C8up0_IIXXbbeD057aeTn1iUPndLII0nbCDfA45BOv_qDY_rx43wxai3aULhYfFqbrZtRtkNTwn8bSGVqROqlgQlNS8Lbjrs464cnP_Tp8lszH0anKVryFNsADMOxq0iISCFgasNH6o4Mmag-ZWu5IcTrYZeOr7nqdJZzHbJ-IFTB3nqnhMxu0PA--eqAV8uLUNlpaFSvlNrcLyQrFw58VC83QqP3l_szG73n1rXxLFSqdRn8q1wWMsfOPYwWqOlxNNx6r1hnoxM2cDLsGq6NZsIXH1G-Xs9RfpMMiucgZtihG-rJypy6axfJfCW7wdr1o0yIUmWodwSun9mAGHCjjPb7ME4HucJ1x4Xrd9D6QkGkSg2LUgCEp40oJE3KWvZTlFf6fQqUhe9Er8XmAXw6bj4jW8hUtHOlKOJRJ2iDdTVilK_w01qo=s969-no?authuser=0')` }} />
                            <h4 className="trending__sale">Sale</h4>
                            <div className="trending__icon-list">
                                <i className="fas fa-shopping-cart trending__icon"></i>
                                <i className="fas fa-search trending__icon"></i>
                            </div>

                            <div className="trending__product-name">
                                Túi hoa cúc
                            </div>
                        </NavLink>
                        <div className="trending__price">
                            <span className="trending__price-old">
                                $19.00
                            </span>
                            From:
                            <span className="trending__price-new">
                                $15.20
                            </span>
                        </div>
                    </li>
                    <li className="trending__item">
                        <NavLink
                            to='/products/3'
                            exact
                        >
                            <img alt="" className="trending__img" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/BoTMF-skY1Zs6hl1O95gFTcKaLAHn1iNpY2DUFpfkyHCaxnM-zuzNSJpGV9MP3i2iqPpHiOSBHC_BDcLZ7JKPGdb0aqCHobUMuSj1katEyO0-3Pf4cs4X-y5yB7ejPoxPig0AEXEPESJIN9Pc7OLZl3jJfZ-DVh-8H1oJmydV4n1jbJ_5MxLoQ8jjJgoJmU9wE2DLIBaTvedxMox5BUtRcy4qJCwWCToEgYlHXgjG9mMyZA6yCQ8x1I4x7hC7rUJTfBsLW7nB67JFiZdr6qEQFY50pesgBVDCn94tigr0E_BmGVfZHW4TdEiw9iX1b424gbosBXHAIwhX3ie1DF49fudQYo22qOZQ6bsWA8m7zmAYxIVx0DU2jEvJZlemFOrdbrSapTlqbQ9TBjP4s5XFYA0GLB5zIXN5l4ms0_veD74EU565VD9MFfCJfqW4L3aO6jAEBng02B14LgjL-u3MnAV74PUtWOadjEJtvBSBhONr-9FoQfPS5Hs7JyX3CnrDrFqMi9MQEq914QDgixXyH0W2jhWLTrnxgXm-VxipgbmWoT60iU7isE8I3gbAtroUU8GuwAKuU3RpjvP1cu6O_qgtq8ImoMvqVZcSi6Tw0Xwz_r_gB_cJGeIyj2mhe_wIbdzXwCP3cF_9jRxwBhMouHBMw3-0yyIK8qZ1G7TZsj0Kexkj0Z-p016g4UQ-17D5V0m8Ugpfq3rj9INtkfoNzmn=s969-no?authuser=0')` }} />
                            <h4 className="trending__sale">Sale</h4>
                            <div className="trending__icon-list">
                                <i className="fas fa-shopping-cart trending__icon"></i>
                                <i className="fas fa-search trending__icon"></i>
                            </div>
                            <div className="trending__product-name">
                                Túi mây hộp khóa
                            </div>
                        </NavLink>
                        <div className="trending__price">
                            <span className="trending__price-old">
                                $19.00
                            </span>
                            From:
                            <span className="trending__price-new">
                                $13.30
                            </span>
                        </div>
                    </li>
                    <li className="trending__item">
                        <NavLink
                            to='/products/4'
                            exact
                        >
                            <img alt="" className="trending__img" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/4hLYS_EVad61clSaF3v9MkpnnKZmVR60Wlo3TMEOQDggKR59YeMuYsSGyRf5TqOGWe0yfQMxo_mX_QET2QHeGrGxLuG4i2tzdx_TdcfJmtPXl7mny9YLJS_9kp0XaXHEdcMfW57XgRLT5K3MqPm-b7P8KUwfzfhsQGDS7riu7s59gdSJf6-p_WrbtTuHgd9rHl1jhmKa6-HrLP3OQI25X6lQqf_ndC6lE3Y5jtm5oJqwbN5YPyBoKkW8lRtI2TQyK2w17KoPvVtILXJuW4Bb9_Ps8TRz914x_mh8TtC0RxNCmtJLjS6yTJ6g26m05ApqlH3rR0-yEMHDYvC_6cJTLcHZGWjoT9EbZ1iRbQpYqefimYfxO1oKulIB4nBkmGh3Qhx8UpwHb1fNhsiK3eq0vX6Lr0kbd9XG7udvtBWn4sA7XN3UjxRdSOmtVk08NENNLLlBNf-CpTsfmDp0bZ5WylvzQf5KPK_NJ4mNW6-6dOlCU-6eHe7YLLk8brA5NtMGcO0IXJmifguWkWJmPYNwEry29dA5urepe7cpeWi9hTtTbJCTewCp0GYHdvDywH9A46vpbOkug45sWUpvMPZV8FfcYp4hLHtRHPAiNp2WoMytRpIG8ufBdYlamFOPXpngNPs4PjofEkPouSpgylmtw4v-LJ93nG9eJoSe2l-GTZmFF9WtpPxWZQw4EAyKwe5bplXUzFOcqOs-FItJ3x0H4UW5=s969-no?authuser=0')` }} />
                            <h4 className="trending__sale">Sale</h4>
                            <div className="trending__icon-list">
                                <i className="fas fa-shopping-cart trending__icon"></i>
                                <i className="fas fa-search trending__icon"></i>
                            </div>

                            <div className="trending__product-name">
                                Túi hoa nhí
                            </div>
                        </NavLink>
                        <div className="trending__price">
                            <span className="trending__price-old">
                                $15.50
                            </span>
                            From:
                            <span className="trending__price-new">
                                $10.85
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Trending;