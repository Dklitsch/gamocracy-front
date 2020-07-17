import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField } from '@material-ui/core';
import TwoPanelPopup from './Layout/TwoPanelPopup';
import VerticalList from './Layout/VerticalList';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
}));

const LoginForm = (props) => {

    const classes = useStyles();

    const leftComponent = <Button onClick={props.changeState}>Not a member? Register</Button>
    const rightComponent = (<VerticalList>
        <TextField label="Username"></TextField>
        <TextField label="Password"></TextField>
        <Button variant="contained">Login</Button>
    </VerticalList>)

    return (
        <TwoPanelPopup left={leftComponent} right={rightComponent}></TwoPanelPopup>
    )
}

export default LoginForm;