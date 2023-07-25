import React, { useEffect } from 'react';
import { Card, Container, Button, Tooltip, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ConnectHeaderThree } from '../../component/ConnectHeaderComponent/ConnectHeaderThree';
import { ConnectHeaderTwo } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { CustomCardTitle } from '../../component/CardConstructComponent/CustomCardTitle';
import { CustomSearch } from '../../component/CustomBaseComponent/CustomSearch';
import { CustomChipOption } from '../../component/CardConstructComponent/CustomChipOption';
import { CustomPaginate } from '../../component/CardConstructComponent/CustomPaginate';
import { NoPresale } from '../../component/CardConstructComponent/Nopresale';
import { CustomContract } from '../../component/LockComponent/CustomContract';
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
    linkbtn: {
        borderRadius: "25px",
    },
    contractItem: {
        textAlign: 'center',
        padding: '7px'
    },
    Contract: {
        marginTop: '30px'
    }
}));
export const Defidashboard = () => {
    const classes = useStyles();

    const { account, status, connect, reset, networkName, balance } = useWallet();

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

    let connectHeader;
    let customContract;

    if (!account) {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderThree connectWallet={connectWallet} />
            </div>
        )
        customContract = (
            <NoPresale />
        )
    } else {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderTwo networkName={networkName} unit="ETH" wallet={account} balance={balance} />
            </div>
        )
        customContract = (
            <div className={classes.Contract}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={classes.contractItem}>
                            <CustomContract version="v2" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                {connectHeader}
                <div>
                    <Card className={classes.Card}>
                        <CustomCardTitle iconUrl="/images/card/dx-launch.png" headerIcon="0" headerTitle="DeFi Launchpad With Instant Listing And Liquidity Locking" />
                        <div>
                            <CustomSearch>
                                <div>
                                    <Tooltip title="Switch to V1 contracts" placement="bottom">
                                        <Button href="/app/defi-dashboard-v1?chain=ETH" target="_blank" size="large" className={classes.linkbtn}><span className={'fs8 fw6 textBlue'}>V1 CONTRACTS</span></Button>
                                    </Tooltip>
                                </div>
                            </CustomSearch>
                        </div>
                        <div>
                            <CustomChipOption />
                        </div>
                    </Card>
                </div>
                <div>
                    {customContract}
                </div>
                <div>
                    <CustomPaginate />
                </div>
            </Container>
        </React.Fragment>
    );
}
