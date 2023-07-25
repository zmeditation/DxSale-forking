import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        margin: '8px',
        position: 'relative',
        textAlign: 'center',
    },
}));
export const LoadingCard = (props) => {
    const classes = useStyles();
    const { text } = props;
    return (
        <Card className={classes.Card}>
            <p>{text}</p>
        </Card>
    );
}