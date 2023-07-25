import React, { useEffect } from 'react';
import { Card, Container, Tabs, Tab, Grid, Fab } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ConnectHeaderOne } from '../../component/ConnectHeaderComponent/ConnectHeaderOne';
import { ConnectHeaderTwo } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { CustomInput } from '../../component/CustomBaseComponent/CustomInput';
import { CustomCardTitle } from '../../component/CardConstructComponent/CustomCardTitle';
import CustomTabPanel from '../../component/CardConstructComponent/CustomTabPanel';
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
    tabs: {
        '& button': {
            fontWeight: 600,
            fontSize: '.875rem',
        },
        '& .MuiTabs-indicator': {
            height: '4px',
            borderRadius: '10px 10px 0 0',
        }
    },
    tabContent: {
        textAlign: 'center',
    },
    tabContentOther: {
        display: 'inline-block',
        width: '30%',
        marginTop: '40px'
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
    },
    formCard: {
        marginTop: '40px',
        boxShadow: '0 5px 57px #98989d7a',
        padding: '20px',
    },
}));

export const Locklptokens = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    let connectHeader;
    if (!account) {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderOne connectWallet={connectWallet} />
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
                        <CustomCardTitle headerIcon="1" headerTitle="Lock Or Manage Liquidity" />
                        <div className={classes.content}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                className={classes.tabs}
                            >
                                <Tab label="LOCK LIQUIDITY" />
                                <Tab label="MANAGE LOCKED LIQUIDITY" />
                            </Tabs>
                            <div className={classes.tabContent}>
                                <CustomTabPanel value={value} index={0} dir={theme.direction}>
                                    <p>Use the DxLock Liquidity Locker to lock your LP tokens to show your investors proof of locked liquidity!</p>
                                    <br />
                                    <p className={'fs8 mg0'}>Token Locker Fees 0.1 nan (Flat Rate)</p>
                                    <br />
                                    <Grid container>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={6}>
                                            <Card className={classes.formCard}>
                                                <p className={'mg0'}>DxLock Liquidity Locker</p>
                                                <CustomInput label="Enter nan Pair Address" placeholder="Ex. 0xAAe5f80BaC0c7fA0cAd6c2481771a3B17aF21455" />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={3}></Grid>
                                    </Grid>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1} dir={theme.direction}>
                                </CustomTabPanel>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}