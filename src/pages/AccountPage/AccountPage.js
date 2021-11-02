import './AccountPage.css';
import Register from './../../components/login-register/Register/Register'
import { useState } from 'react'
import Login from './../../components/login-register/Login/Login';
import ForgetPassword from './../../components/login-register/ForgetPassword/ForgetPassword'


function AccountPage(props) {
    const { status } = props;

    const [tab, setTab] = useState(status)

    const handleChangeLogin = () => {
        setTab(1)
    }

    const handleChangeRegister = () => {
        setTab(2)
    }

    const handleChangeTab = (number) => {
        setTab(number)
    }

    const handleBackToLogin = (number) => {
        setTab(number)
    }

    return (
        <div className="account-container">
            <div className="account-form">
                <div className="account-form__nav">
                    <div className={tab === 1 ? "account-form__login-sign active-tab" : "account-form__login-sign"} onClick={handleChangeLogin}>Login</div>
                    <div className={tab === 2 ? "account-form__login-sign active-tab" : "account-form__login-sign"} onClick={handleChangeRegister}>Register</div>
                </div>

                <Register tab={tab} />

                <Login tab={tab} handleChangeTab={handleChangeTab} />

                <ForgetPassword tab={tab} handleBackToLogin={handleBackToLogin} />
            </div>
        </div>
    );
}

export default AccountPage;
