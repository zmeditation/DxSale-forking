import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Fab } from '@material-ui/core';

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
        margin: '5px'
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
export const ConnectHeaderOne = (props) => {
    const { connectWallet } = props;
    const connectWalletHandle = () => {
        connectWallet();
    };

    const classes = useStyles();
    const header = (
        <div>
            <Fab variant="extended" onClick={connectWalletHandle} size="medium" color="primary" className={classes.Fab}>
                CONNECT WALLET TO START
            </Fab>
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