import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {

};

function Login(props) {

    const { tab, handleChangeTab } = props;

    const handleSubmit = (value) => {
        console.log('Form Submit:', value)
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} tab={tab} handleChangeTab={handleChangeTab} />
        </div>
    );
}

export default Login;