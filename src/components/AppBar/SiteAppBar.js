import React, { useState } from 'react';
import LoginButton from './LoginButton/LoginButton';
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Button, } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { loggedInState } from './LoginButton/LoggedInSlice';

const SiteAppBar = (props) => {

    const loggedIn = useSelector(loggedInState);

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
                    {loggedIn && <Button color="inherit">Logout</Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default SiteAppBar;