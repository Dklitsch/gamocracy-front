import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { Button, Menu, MenuItem } from '@material-ui/core';
import LoginEnums from './LoginEnums'
import LoginPopup from './LoginPopup'

const LoginWidget = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
        setMenuIsOpen(true);
    };

    const handleClose = () => {
        setMenuIsOpen(false);
        setAnchorEl(null);
    };

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
                open={menuIsOpen}
                onClose={handleClose}
            >
                <MenuItem>
                    <LoginPopup></LoginPopup>
                </MenuItem>
            </Menu>
        </div>
    );

};

export default LoginWidget;