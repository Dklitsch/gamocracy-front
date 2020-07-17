import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField } from '@material-ui/core';
import TwoPanelPopup from './TwoPanelPopup';

const useStyles = makeStyles((theme) => ({}));

const childrenToGrid = (children) => {
return React.Children.map(children, 
    (child, i) => <Grid item xs={12} key={i}>{child}</Grid>)
}

const VerticalList = (props) => {
    return (
        (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            >
                {childrenToGrid(props.children)}
            </Grid>)
    )
}

export default VerticalList;