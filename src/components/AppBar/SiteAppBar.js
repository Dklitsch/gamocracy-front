import React, { useState } from 'react';
import LoginWidget from './LoginWidget/LoginWidget';
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, } from '@material-ui/core';

const SiteAppBar = (props) => {

    return (

        <AppBar position="static">
            <Toolbar>
                <Grid 
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    <LoginWidget></LoginWidget>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default SiteAppBar;