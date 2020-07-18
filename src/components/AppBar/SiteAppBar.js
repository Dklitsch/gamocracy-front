import React, { useState } from 'react';
import LoginButton from './LoginButton/LoginButton';
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Button, } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { loggedInState, logout } from './LoginButton/LoggedInSlice';

const SiteAppBar = (props) => {

    const loggedIn = useSelector(loggedInState);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('id_token');
        dispatch(logout());
    }

    return (

        <AppBar position="static">
            <Toolbar>
                <Grid 
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    {!loggedIn && <LoginButton></LoginButton>}
                    {loggedIn && <Button color="inherit" onClick={e => handleLogout(e)}>Logout</Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default SiteAppBar;