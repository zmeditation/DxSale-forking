import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        margin: '8px',
        position: 'relative',
        textAlign: 'center',
        padding: '5px'
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.80%',
            fontWeight: 600,
            lineHeight: 1.75,
        },
        padding: '6px 16px!important',
        height: 'auto!important',
        fontSize: '80%',
        width: '150px!important',
        textTransform: 'none'
    },
    paragraph: {
        '& p': {
            margin: '2px'
        },
        '& span': {
            color: 'black'
        }
    },
    paragraph1: {
        '& p': {
            margin: '2px'
        },
    }
}));
export const ConnectHeaderTwo_Offline = () => {
    const classes = useStyles();
    const header = (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <div className={classes.paragraph}>
                        <p>Network</p>
                        <Fab disabled variant="extended" href="/" size="medium" color="inherit" className={classes.Fab}>
                            none
                        </Fab>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.paragraph}>
                        <p>Wallet</p>
                        <Fab disabled variant="extended" href="/" size="medium" color="inherit" className={classes.Fab}>
                            0xA0ea...dF37
                        </Fab>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.paragraph}>
                        <p>Balance</p>
                        <Fab disabled variant="extended" href="/" color="inherit" size="medium" className={classes.Fab}>
                            0.0000 undefined
                        </Fab>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
    return (
        <Card className={classes.Card}>
            {header}
        </Card>
    );
}