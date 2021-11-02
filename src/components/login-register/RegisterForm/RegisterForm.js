import React from 'react';
import PropTypes from 'prop-types';
import './RegisterForm.css'
import InputField from '../form-controls/InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react'

const schema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password')
});

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};


function RegisterForm(props) {

    const { tab } = props;

    const handleTodoFormSubmit = (values) => {
        form.reset();
    }

    const handleShowPassword = () => {
        setHidePassword(!hidePassword)
    }

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })

    const [hidePassword, setHidePassword] = useState(false)

    return (
        <form onSubmit={form.handleSubmit(handleTodoFormSubmit)}>
            <div className={tab === 2 ? "account-form__input account-form__regis active-form" : "account-form__input account-form__regis"}>
                <div className="account-form__name">
                    <InputField name="firstName" label="First name" form={form} className="account-form__first-name" />
                    <InputField name="lastName" label="Last name" form={form} className="account-form__last-name" />
                </div>
                <div className="account-form__email--wrapper">
                    <InputField name="email" label="Email" form={form} className="account-form__email" />
                </div>
                <div className="account-from__password--wrapper">
                    <InputField name="password" label="Password" form={form} type="password" className="account-form__password" />
                    <div
                        className="toggle-password-type"
                        onClick={handleShowPassword}
                    >
                        {hidePassword === true ? 'Show' : 'Hide'}
                    </div>
                </div>
                <button className="account-form__regis-btn">Create an account</button>
            </div>
        </form >
    );
}

export default RegisterForm;