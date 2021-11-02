import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

function Register(props) {

    const { tab } = props;

    const handleSubmit = (value) => {
        console.log('Form Submit:', value)
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} tab={tab} />
        </div>
    );
}

export default Register;