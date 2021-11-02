import React from 'react';
import ForgetPasswordForm from '../ForgetPasswordForm/ForgetPasswordForm';


function ForgetPassword(props) {

    const { tab, handleBackToLogin } = props;

    const handleSubmit = (value) => {
        console.log('Form Submit:', value)
    }

    return (
        <div>
            <ForgetPasswordForm onSubmit={handleSubmit} tab={tab} handleBackToLogin={handleBackToLogin} />
        </div>
    );
}

export default ForgetPassword;