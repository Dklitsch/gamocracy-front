import React, { useState } from 'react';
import LoginEnums from './LoginEnums'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginPopup = (props) => {

    const [loginType, setLoginType] = useState(LoginEnums.login);

    if (loginType === LoginEnums.login) {
        return <LoginForm changeState={() => setLoginType(LoginEnums.register)}></LoginForm>
    } else {
        return <RegisterForm changeState={() => setLoginType(LoginEnums.login)}></RegisterForm>
    }
}

export default LoginPopup;