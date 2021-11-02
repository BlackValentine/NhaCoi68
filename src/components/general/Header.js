import { useState } from 'react'
import './Header.css'
import './../../App.css'
import { NavLink } from 'react-router-dom'
import CartContainer from '../../containers/CartContainer'

function Header() {
    const [toggleIcon, setToggleIcon] = useState(true)
    const onToggleIcon = (toggleIcon) => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <header className="header" id="header">
            <nav className="nav">
                <NavLink
                    to='/'
                    exact
                    className='nav__logo'
                >
                    <img src="https://lh3.googleusercontent.com/ygo3OYTLCfsFicqmOx639tvO9av93b9UEnBD9-gutoGcQLQSrtjuDNRoia5Uv-_e8yHXs_RKtqDmCHYrU48L-xXo-XCrJcy5k04h38GOjws7hsCbU_qIy7w5VoddwNdMsgZA92XrEcmntxs0jqb7N0Yt0YjLziR9qY5JnHxYwyr9BVTn_SRnLwTZMPKOzabs7UuwxEGzDf2j3eHmH0g8ocMjOSH-P7Xy07I-BBWpvPJkiLwwoNfE65XXGeDjdHkYXoc5SM5KQZ5YxdbLFh-q-uSlpbvTR5iGWqHS22OUsTYXNB31b0gI6PSsGshqiQcRdE9LYUTjpxokg8OZ-lXG7G7WZk66paPvQi9iIQM906PiE4w5ogXcpDuJ8rvSeseHvzx4-JIptCVBzpm6MD-lH-tFJR7VGn3PnYS8O2cQeY2ojlynzpX2xQWLqGX5Q4cJH2OkxH3hG86syuRZPX1A9rL2vEgRynqBUfVUJFurdgyr5YC1b1RQMNPQvNbxD2NjxT5KOgn2V4E5d-JuaWHs95UrnJTDlJSqYBof0cc-qrcUZtTjB52EcUUSCsjnMchmfyLcXBkty3g1O84j44DFV-ZoHEwnmBg8v6calFcaAD_5xX3JF20Nv9bglL8kosH9MFOb-NNH63L45MOXQDrD1FPYgzkQJ3ASGJ77KnxbinEGnzrcwWhZ4APbJ3YpxWPdPi4YV740KIfw3m2u9ymqy5A=w481-h480-no?authuser=0" alt="Logo" />
                </NavLink>
                <div className="nav__menu">
                    <div className="nav__toggle" onClick = {() => onToggleIcon(toggleIcon)}>
                        {toggleIcon ? <i className="fas fa-list"></i> : <i className="fas fa-times"></i>}
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink
                                to='/'
                                exact
                                className='nav__link'
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav__item nav__item-shop">
                            <NavLink
                                to='/products'
                                exact
                                className='nav__link'
                            >
                                Cửa hàng
                                <i className="fas fa-chevron-down"></i>
                            </NavLink>
                            <div className="nav__shop">
                                <ul className="nav__shop-list">
                                    <li className="nav__shop-item">
                                        <h3 className="nav__shop-title">
                                            Shop by Categories
                                        </h3>
                                        <NavLink
                                            to='/products?filter=SedgeBag'
                                            className="nav__shop-link"
                                        >
                                            Túi cói
                                        </NavLink>
                                        <NavLink
                                            to='/products?filter=RattanBag'
                                            className="nav__shop-link"
                                        >
                                            Túi mây
                                        </NavLink>
                                        <NavLink
                                            to='/products?filter=Hat'
                                            className="nav__shop-link"
                                        >
                                            Mũ
                                        </NavLink>
                                        <NavLink
                                            to='/products?filter=Decor'
                                            className="nav__shop-link"
                                        >
                                            Decor và gia đình
                                        </NavLink>
                                    </li>
                                    <li className="nav__shop-item">
                                        <div className="nav__shop-item-block">
                                            <h3 className="nav__shop-title">
                                                Shop by Type
                                            </h3>
                                            <a href="#1" className="nav__shop-link">
                                                Slingbag
                                            </a>
                                            <a href="#1" className="nav__shop-link">
                                                Shoulderbag
                                            </a>
                                            <a href="#1" className="nav__shop-link">
                                                Handbag
                                            </a>
                                            <a href="#1" className="nav__shop-link">
                                                Backpack
                                            </a>
                                        </div>
                                        <div className="nav__shop-item-block">
                                            <h3 className="nav__shop-title">
                                                Wooden Wares
                                            </h3>
                                            <a href="#1" className="nav__shop-link">
                                                Kitchen Utensil
                                            </a>
                                            <a href="#1" className="nav__shop-link">
                                                Cutleries
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav__shop-item">
                                        <h3 className="nav__shop-title">
                                            New Collections
                                        </h3>
                                        <ul className="nav__shop-newcollec-list">
                                            <li className="nav__shop-newcollec-item">
                                                <NavLink to={`/products/10`}>
                                                    <img className="nav__shop-img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/3jpvea3AZZBideexv5geaQ-HeLVekRvlXXC1FZWAYPNq-hphTkxaWSH4Qo9I-9wwslBc1ktJrMXWhuJMpa6LWaQaZTaHj_cW76LDMBc5THJDWmajRGsiXdn7A1MmcMWWVje7E6yJ-2n44br-DWQPx6H-zPFAsbp6xXW1HHJa9Z7Qv5wnjvxG59t5tGHI4tSt7IMrMYpW3ooZdfAhN3pvFZmdkCklwovDKFlGCq8e6mlKgP7NkMLJQ2-kYEzAsjNo_QEyAUDV4-ZWH89He2lIwa1LwgxhCUe8M7NLx7VYafVgrNAHGe8rrwELFm80clPk-d3N-HQsKF5R5Pat99UXgQz-V7kVn1pZ8lG8ZPbaIP-GxbzS9pYaunnKjm0uAd14peEK29aPFYH_ptUkqSveoaqsOB6vkqG38NAXTzbhaOuaTo_CFDTkqBuerVQdPRcNkbSXeX_GtzovOfRjApH-NWcrTHA_QtdHdRusBk4IIMBPVu_LRDqWaCR2JRv0JVN1jRQUNuSEiqj04OB2FDOA08eaycKB04gu9NzDjig8Ph7GMm8nHJQZdiHbjjqZ07an_jmyNS3wkHo58gLT9nHUaldlJ_Lz5LERLZ5EuznOdy4Khr-xTBozcuCQoEwpBNgqokE6DSkDXT5b7RMtdqsFJv5UN9u9uLXp8Xz4hzon5MY9s_14zDVhOwaERBVlxzj_5EcOtp43CILE4OwjfLt5jtw=w2124-h1592-no?authuser=0')` }} />
                                                </NavLink>
                                                <div>
                                                    <NavLink to={`/products/10`} className="nav__shop-link">
                                                        Túi liễu dáng hộp gắn nơ cầm tay
                                                    </NavLink>
                                                    <span>$28.00</span>
                                                </div>
                                            </li>
                                            <li className="nav__shop-newcollec-item">
                                                <NavLink to={`/products/13`}>
                                                    <img className="nav__shop-img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/i0zmtIxEWkrSFsLn7k_BWM8AUiRQVagfKhbpo1WQyi1vkQjfDlRFp25k8zQ7Jsu8FAgoLZynerLG1Z_Fbq8QCcyR1UCHunNuZZAl9FukjBkJ60PvSBv7DbuVef_TLQhFg3JwaDQ7EtWiAe22piOZvzdYu30FHc6g38AUBqSrwzl4bod4B9YoG80lrN6P1igR8fBC-iF-QbtqQ8celfg2mKqnpUbUOUQ443aQYvkdnQ1QlVzQpgvktwWs1_cRf7mjj48PyGh8cUmf9cqTTYNekDy3sONMyJGZx4Jq9w5ZjWwfV4S-TbRItPmbV7Ic_ho3PJ98Wc2Ae_oHcSHWBEf-CfbQJk8PXw0womGQLazHZTh6jHhZJMs6yjWElfTKIjIl4tBmAOeL7pYF78vN9J4p9iwRfqdZu1VAIwSnNtMmRLtCYwkEEIOVCxnW15PuymYVI9bBgKj2izjiWdso-OgoYt81yf1A4qfSGhYyl4qSkk74U8PesgUFf5_9X20J3tM2kxoE1mmLbR8U30qW1sGljEFe6xVSR4fRJyGfgqvxv447cuvLnK0RiYcc2qrPvtg75pUc0S47n-oJqIQLDRP27L8z4V2vhS9zmZJUnWg_RJsK1_ZxIPok_6JdrtT9CO_yj8vlOa1CGgsG8N18eWXNiM4iL1K4d5AobFuTT6SOF3tLIRPKKoIhQtpCtRA1ilRs2zTYVdZyyEfSGsk1PjgVujM=w750-h611-no?authuser=0')` }} />
                                                </NavLink>
                                                <div>
                                                    <NavLink to={`/products/13`} className="nav__shop-link">
                                                        Mũ cói vành khăn
                                                    </NavLink>
                                                    <span>$15.00</span>
                                                </div>
                                            </li>
                                            <li className="nav__shop-newcollec-item">
                                                <NavLink to={`/products/34`}>
                                                    <img className="nav__shop-img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/W1Z6Yy0e5iyb0HGi3KmWsQcobX1f6F1hm0Eycd_c6SesKEHu3i7AOfBqqnwYv7A_xOc6Nf3IJ7_PyMJwsUcia3fOIrUU1zg1NWFFqgLr9FMhthOSRT_w6nAGdUKby1l5XVspoACS5RaHXJ0WrUf_gYcmNLJHZVukNtpG7H_bAlYlWGnMOYcaQf8YoDJstl6uh5DPge6rLLn9m5t1RHZmZdRljJA8Tzq4Sc1yu6jgiYe-I92hVxtw9F_V3C8kcOBWZ22oXE5YCeJcFCV12UbIEOOPccIogGtTJfiayn1cLWn9-zRbQqRcZw1TJJjDcZ8GvP14-3ncekJhGwl2hqMuZG7Fv4VeAtjVPzJN_0Gcd1HnH5Zvn8oU1gvBFyNcA48qoSA2QSrYQ_hXsg8hyLAtFQ6-SNZCwjPVcZnqWHfMvjVbOyvby-Wg0LAWWJgVa7-hq0a7k4goOtMVjK47yXlVC7ZnpyCpsJFW-l_yALF-xv8fxhT_zNV_hA1iQHEUDRax9M8lb6SDt8Au7pdvC--vTiG7TU2HnFcb2wDTKzSnPnYmjr7hJuS3KDpmoqD_GsS502rzEeuS8QQ6xzsh2rq9JYfV246AIc6RKWCphumVMxBTSxbC3lAcLcUcG9I2Um8ip3u79X3961yinTsgEXYnI_x9NUv8hpHu5sC0qy7aMHD-6FhPWxEEgEklkbCiAU2yZnaJzvKOPSBgB707dQbMzlA=s1024-no?authuser=0')` }} />
                                                </NavLink>
                                                <div>
                                                    <NavLink to={`/products/34`} className="nav__shop-link">
                                                        Gương tai gấu
                                                    </NavLink>
                                                    <span>$44.00</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav__shop-item">
                                        <div>
                                            <img className="nav__shop-main-img" alt="" style={{ backgroundImage: `url('https://afamilycdn.com/150157425591193600/2020/6/23/10142561926744699394913972076939689556095451n-15928188927271649139691-1592897420712-1592897420856669526958.jpg')` }} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item nav__item-collections">
                            <NavLink
                                to='/collections'
                                exact
                                className='nav__link'
                            >
                                Bộ sưu tập
                                <i className="fas fa-chevron-down"></i>
                            </NavLink>
                            <div className="nav__collections">
                                <ul className="nav__collections-list">
                                    <li className="nav__collections-item">
                                        <a href="#1" className="nav__collections-link">
                                            <img alt="" className="nav__collections-img" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/6w-FQh1j6alxjVYN3qAaBxQh8U_K-OgRTRHXVMvL35IbP6VlFA-Yer49hCS6WFhT9v_Kji9Af91lcN4RZf9LYnYReOCbXmc5c2oLa-2CWewc9yQ57lJD-kxRKHq9JwtV48foqjegPYQVWcM7YXGjpKVrIj3saWDeRqO_ZB4MJG8eXPhdK14IPBrVb-GH3oHi-axbzHsIUFO9z1BOhWkincGjqUT1xP4qZps2xr1WSP2RFLwauyR0k9qJeuYVIu2QNQMKRsRa0TZBiJlo0EzGsVbc8sUnKdSm_9j5QGnVWd_h9CBS57WGHlNmUfUFvAZdCvrkOWUcAVTsVToBW9hRo3UEUsMFwQQYTR7Ggo-ETcprIq2O3h7z75P7w71OBFKko2jhGGGhWGNEE7r0Ou1u-8qwhqfqMtGVZgRaEy5h8HOqxvPTkEJ0zHqTGiC0UwdJNDcuOazLIUrevlKMOqTD4zKXEYswlZJhXT-hSA4R81ECdMqv-3UW0Rgqq_XtKwPzKC6dddndwarQdAR9AD22spkNCDCslRka5l9EMkcGBRyAWmD-s4wADWdr_X0KHIhBS0YmjgfBo5hV1m7qbwk4NFxhOmrcjIrkRMC08l3-IAfFrsqeptvldHk6ADiNSmg44Tk0nDHoCQe-5o-jiZ2sOhhNWGwmmTzfgbTF8ayucwzTZRiMX7zeqLUu6APhH5Awv0zJBtV0RNenPourYUFbWJc=s1592-no?authuser=0')` }} />
                                            <h2 className="nav__collections-text">Túi Cói</h2>
                                        </a>
                                    </li>
                                    <li className="nav__collections-item">
                                        <a href="#1" className="nav__collections-link">
                                            <img className="nav__collections-img" alt="" style={{ backgroundImage: `url('https://bizweb.dktcdn.net/100/107/464/files/mu-coi-di-bien-c89794fe-8586-4264-a702-0eeac98bfcaa.jpg?v=1588825097140')` }} />
                                            <h2 className="nav__collections-text">Mũ cói</h2>
                                        </a>
                                    </li>
                                    <li className="nav__collections-item">
                                        <a href="#1" className="nav__collections-link">
                                            <img className="nav__collections-img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/rf-nDWSXu2gaOqbh9qzGUUntVjXoxZD8eVDIhj80WuP88-VZUzMi3jSjLiqpdJnFyb1ttbpPdEgOPzijNiALgNrt1ybWhFUIW7U2hLcC5Q5m672uJyHbcj1gVLafvLHZWGj9VCF8sXYy7NaLkXzBByfpaS_N0yI7hNYsvpQVwFTEBnH4QQzOFLt64PV6UjIOnNUVySt17RBbxE2Vr-V9f63bsPRFL0sIoSi5Jj1LSYZ2JQYaAsM1NOW0zsLCc4L6_8WKheii1qo1QbqxQQSQIoTRsKh02VTfpjzFH2KTAoazOVNnnjUs_SKLxho_uFrTBri-Md0pkAB4WvENbTx62Zaam4ZMBI8zqpjJ1qF7jy7ZbRp1jq9ulB_neyQ5FQ8Z-kEBa1BU3_V9C7p9zYRVbSuPcEUFqj8VZDHQL4ZUyHekGMuR_qGpJNSPpfkxYhT6qkbp1g7bkkLWlhZe_3lbzXIoUblwCsYlhSRG6vl8gNAZevD2M-93ja7dZ1sG3adJNKZN4fcyTPtrk0vmYgy0EwAskyiawmDyL3UpDGLAQnAJnn_Zp2B1zyObB76XRpPUng-WHGoCzcDiE6SKvx_4VAd72Gt6e6Wrofw6LNW1UukD4PEcQMu92iCND22U8xcBdBuU_KgNLpM6luR3MtdfHEBOwSDYMHoe3FmhUGotKBsMWHG0fiMeMfAKOXmNvHUCe-Uh9R_0S44qYu9p2hmvPoI=w491-h405-no?authuser=0')` }} />
                                            <h2 className="nav__collections-text">Túi Đi Biển</h2>
                                        </a>
                                    </li>
                                    <li className="nav__collections-item">
                                        <a href="#1" className="nav__collections-link">
                                            <img className="nav__collections-img" alt="" style={{ backgroundImage: `url('https://ae01.alicdn.com/kf/Hd02bb0431c2145db93472d1ae3f95f33E/B-ng-G-T-Nhi-n-B-t-a-Mu-ng-Salad-G-o-Tr-i.jpg_Q90.jpg_.webp')` }} />
                                            <h2 className="nav__collections-text">Decor gia đình</h2>
                                        </a>
                                    </li>
                                    <li className="nav__collections-item">
                                        <a href="#1" className="nav__collections-link">
                                            <img className="nav__collections-img" alt="" style={{ backgroundImage: `url('https://kenh14cdn.com/2018/5/21/photo-1-15268637267191070129063.jpg')` }} />
                                            <h2 className="nav__collections-text">Bộ sưu tập mới</h2>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to='/strength'
                                exact
                                className='nav__link'
                            >
                                Điểm mạnh
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to='/questions'
                                exact
                                className='nav__link'
                            >
                                Câu hỏi
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav__function">
                    <div className="nav__customer">
                        <div className="nav__customer-icon">
                            <NavLink
                                to='/account/login'
                                exact
                            >
                                <i className="fas fa-user nav__icon"></i>
                            </NavLink>
                        </div>
                        <div className="function__customer">
                            <NavLink
                                to='/account/login'
                                exact
                                className='nav__login'
                            >
                                Login
                            </NavLink>
                            /
                            <NavLink
                                to='/account/register'
                                exact
                                className='nav__regis'
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav__function-icon">
                        <i className="fas fa-search nav__icon nav__search-icon"></i>
                        <div className="nav__cart">
                            <i className="fas fa-shopping-cart nav__icon nav__cart-icon"></i>
                            <CartContainer className="cart"/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header