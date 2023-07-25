import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Fab } from '@material-ui/core';
import { SelectNetworkModal } from './SelectNetworkModal';
import { switchNetwork } from '../../util';

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
            width: '64px',
        },
        padding: '6px 16px!important',
        height: 'auto!important',
        fontSize: '80%'
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
export const ConnectHeaderTwo = (props) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const { networkName, balance, unit, wallet } = props;
    const start_and_end = (str) => {
        if (str.length > 10) {
            return str.substr(0, 6) + '...' + str.substr(str.length - 4, str.length);
        }
        return str;
    }
    const changeNetwork = () => {
        setModalOpen(true)
    }

    const modalShowHandle = (value) => {
        setModalOpen(value)
    }

    const switchHandle = (chainId) => {
        switchNetwork(chainId);
    }

    let account = start_and_end(wallet);
    const header = (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <div className={classes.paragraph}>
                        <p>Wallet</p>
                        <Fab disabled variant="extended" href="/" size="medium" color="inherit" className={classes.Fab}>
                            {account}
                        </Fab>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.paragraph1}>
                        <p>{networkName} Network</p>
                        <Fab variant="extended" onClick={changeNetwork} color="primary" size="medium" className={classes.Fab}>
                            CHANGE NETWORK
                        </Fab>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.paragraph}>
                        <p>{unit} Balance</p>
                        <Fab disabled variant="extended" href="/" color="inherit" size="medium" className={classes.Fab}>
                            {parseFloat(balance).toFixed(4)} {unit}
                        </Fab>
                    </div>
                </Grid>
            </Grid>
            <SelectNetworkModal switchClick={switchHandle} showStatus={modalOpen} modalShowHandle={modalShowHandle} />
        </div>
    )
    return (
        <Card className={classes.Card}>
            {header}
        </Card>
    );
}