import React, { useState } from 'react';
import LoginEnums from './LoginEnums'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Button } from '@material-ui/core';
import TwoPanelPopup from '../Layout/TwoPanelPopup';

const LoginPopup = (props) => {

    const [loginType, setLoginType] = useState(LoginEnums.login);

    let loginComponent;
    let leftComponent;

    if (loginType === LoginEnums.login) {
        leftComponent = <Button onClick={() => setLoginType(LoginEnums.register)}>Not a member? Register</Button>;
        loginComponent = <LoginForm changeState={() => setLoginType(LoginEnums.register)}></LoginForm>
    } else {
        leftComponent = <Button onClick={() => setLoginType(LoginEnums.login)}>Already a member? Login</Button>;
        loginComponent = <RegisterForm changeState={() => setLoginType(LoginEnums.login)}></RegisterForm>
    }

    return (
        <TwoPanelPopup left={leftComponent} right={loginComponent}></TwoPanelPopup>
    )
}

export default LoginPopup;