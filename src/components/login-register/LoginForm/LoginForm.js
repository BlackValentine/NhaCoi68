import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css'
import InputField from '../form-controls/InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react'

const schema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password')
});

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};


function LoginForm(props) {

    const { tab, handleChangeTab } = props;

    const handleShowPassword = () => {
        setHidePassword(!hidePassword)
    }

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })

    const [hidePassword, setHidePassword] = useState(false)

    return (
        <form>
            <div className={tab === 1 ? "account-form__input account-form__regis active-form" : "account-form__input account-form__regis"}>
                <InputField name="email" label="Email" form={form} className="account-form__email" />
                <div className="account-from__password--wrapper">
                    <InputField name="password" label="Password" form={form} type="password" className="account-form__password" />
                    <div
                        className="toggle-password-type"
                        onClick={handleShowPassword}
                    >
                        {hidePassword === true ? 'Show' : 'Hide'}
                    </div>
                </div>
                <button className="account-form__btn">Sign In</button>
                <div className="account-form__forgot-pass--wrapper">
                    <div
                        className="account-form__forgot-pass"
                        onClick={() => handleChangeTab(3)}
                    >
                        Forgot your Password?
                    </div>
                </div>
            </div>
        </form >
    );
}

export default LoginForm;