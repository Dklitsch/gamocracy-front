import React, { useState } from 'react';
import RegisterForm from './Popup/RegisterForm';
import LoginForm from './Popup/LoginForm';
import { Button, Menu, MenuItem } from '@material-ui/core';
import LoginPopup from './Popup/LoginPopup'

const LoginButton = (props) => {

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
        <>
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
        </>
    );

};

export default LoginButton;