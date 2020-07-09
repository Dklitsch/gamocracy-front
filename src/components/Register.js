import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
}));

const Register = (props) => {

    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="bottom"
                alignItems="flex-end"
                spacing={3}
            >
                <Grid item xs={6}>
                    <Grid item xs={6}>
                        <Button onClick={props.changeState}>Already a member? Login</Button>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <TextField label="Username"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Password"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Register</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register;