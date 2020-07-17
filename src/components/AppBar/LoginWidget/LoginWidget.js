import React, { useState } from 'react';
import Register from './RegisterForm';
import LoginForm from './LoginForm';
import { Button, Toolbar, Menu, MenuItem } from '@material-ui/core';

const LoginWidget = (props) => {

    const [loginType, setLoginType] = useState('login');
    const loginEnums = { login: 'login', register: 'register' }

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    const displayLoginByType = (loginOrRegister) => {
        if (loginOrRegister === loginEnums.login) {
          return <LoginForm changeState={() => setLoginType(loginEnums.register)}></LoginForm>
        } else {
          return <Register changeState={() => setLoginType(loginEnums.login)}></Register>
        }
      }

    return(
        <div>
            <Button
                        color="inherit"
                        onClick={handleMenu}
                        aria-controls="login-menu"
                        aria-haspopup="true"
                    >Login</Button>
            <Menu
                id="login-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem>{displayLoginByType(loginType)}</MenuItem>
            </Menu>
        </div>
    );

};

export default LoginWidget;