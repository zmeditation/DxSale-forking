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
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        margin: '5px 0px 20px 0px'
    },
    FabGreen: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        color: 'white',
        backgroundColor: '#00C853',
        '&:hover': {
            backgroundColor: 'green'
        },
        margin: '5px'
    }
}));
export const ConnectHeaderThree = (props) => {
    const classes = useStyles();
    const { connectWallet } = props;
    const connectWalletHandle = () => {
        connectWallet();
    }
    const header = (
        <div>
            <Fab variant="extended" onClick={connectWalletHandle} size="medium" color="primary" className={classes.Fab}>
                CONNECT WALLET TO START
            </Fab>
            <br />
            <Fab variant="extended" href="/" size="medium" className={classes.FabGreen}>
                WALLETCONNECT
            </Fab>
        </div>
    )
    return (
        <Card className={classes.Card}>
            {header}
        </Card>
    );
}