import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        margin: '30px 8px 30px 8px',
        position: 'relative',
        textAlign: 'center',
        padding: '5px'
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        margin: '5px'
    },
}));

export const CustomPaginate = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.Card}>
                <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={3}>
                        <Fab variant="extended" href="/" color="primary" size="medium" className={classes.Fab}>
                            LOAD 4
                        </Fab>
                    </Grid>
                    <Grid item xs={2}>
                        <p>8 / 8</p>
                    </Grid>
                    <Grid item xs={3}>
                        <Fab variant="extended" href="/" color="primary" size="medium" className={classes.Fab}>
                            LOAD 20
                        </Fab>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Card>
        </div>
    );
}