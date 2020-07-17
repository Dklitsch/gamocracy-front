import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const TwoPanelPopup = (props) => {

    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
            >
                <Grid item xs={4}>
                    {props.left}
                </Grid>
                <Grid item xs={3}>
                    {props.right}
                </Grid>
            </Grid>
        </Container>
    )
}

export default TwoPanelPopup;