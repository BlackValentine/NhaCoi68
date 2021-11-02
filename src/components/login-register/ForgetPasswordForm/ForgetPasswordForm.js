import React from 'react';
import InputField from '../form-controls/InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
});


function ForgetPasswordForm(props) {

    const { tab, handleBackToLogin } = props;

    const form = useForm({
        defaultValues: {
            email: '',
        },
        resolver: yupResolver(schema)
    })

    return (
        <form>
            <div className={tab === 3 ? "account-form__input account-form__reset active-form" : "account-form__input account-form__reset"}>
                <div className="reset-pass_title">Reset your password</div>
                <div className="reset-pass_subtitle">We will send you an email to reset your password.</div>
                <InputField name="email" label="Email" form={form} classNameName="account-form__email" />
                <button className="account-form__btn">Submit</button>
                <div className="account-form__forgot-pass--wrapper">
                    <div
                        className="account-form__back-pass"
                        onClick={() => handleBackToLogin(1)}
                    >
                        Back To Login
                    </div>
                </div>
            </div>
        </form >
    );
}

export default ForgetPasswordForm;