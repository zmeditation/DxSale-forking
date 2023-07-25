import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        margin: '30px 8px 30px 8px',
        position: 'relative',
        textAlign: 'center',
        padding: '5px'
    },
    p: {
        margin: '10px'
    }
}));

export const NoPresale = () => {
    const classes = useStyles();
    return (
        <Card className={classes.Card}>
            <p className={classes.p}>
                No presales in this section yet! Get started by creating your own.
            </p>
        </Card>
    );
}