import React, { useEffect } from 'react';
import { Card, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ConnectHeaderThree } from '../component/ConnectHeaderComponent/ConnectHeaderThree';
import { ConnectHeaderTwo } from '../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { CustomCardTitle } from '../component/CardConstructComponent/CustomCardTitle';
import { LiquidityLocker } from '../component/LockComponent/LiquidityLocker';
import { TokenLocker } from '../component/LockComponent/TokenLocker';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    Container: {
        padding: '7px'
    },
    ConnectHeader: {
        marginBottom: '22px',
    },
    Card: {
        margin: '8px',
        padding: '24px'
    },
}));
export const Dxlockview = () => {
    const classes = useStyles();

    const { account, status, connect, reset, networkName, balance } = useWallet();
    console.log(useWallet());

    //connect Wallet function
    useEffect(() => {
        if (status === "connected") {
            reset();
            console.log("already connect");
        }
        if (!account) {
            if (status === "disconnected") {
                connect();
            } else {
                reset();
            }
        } else {
            console.log("****************");
        }
    }, [account])

    const connectWallet = () => {
        connect('injected');
    }

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('type');

    let lockerContent;

    if (foo == 'lplock' || foo == 'lpdefi') {
        lockerContent = (
            <LiquidityLocker />
        )
    } else if (foo == 'tokenlock') {
        lockerContent = (
            <TokenLocker />
        )
    }

    let connectHeader;

    if (!account) {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderThree connectWallet={connectWallet} />
            </div>
        )
    } else {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderTwo networkName={networkName} unit="ETH" wallet={account} balance={balance} />
            </div>
        )
    }
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                {connectHeader}
                <div>
                    <Card className={classes.Card}>
                        <CustomCardTitle headerIcon="1" headerTitle="View Single Locker" />
                        <div>
                            <Grid container>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={6}>
                                    {lockerContent}
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </div>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}
