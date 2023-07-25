import React, { useEffect } from 'react';
import { Card, Container, Tabs, Tab, Fab, Grid, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ConnectHeaderTwo } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { ConnectHeaderThree } from '../../component/ConnectHeaderComponent/ConnectHeaderThree';
import { CustomCardTitle } from '../../component/CardConstructComponent/CustomCardTitle';
import CustomTabPanel from '../../component/CardConstructComponent/CustomTabPanel';
import CustomNormalInput from '../../component/CustomBaseComponent/CustomNormalInput';
import { LoadingCard } from '../../component/CardConstructComponent/LoadingCard';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: '-webkit-center',
        color: 'white'
    },
    Card: {
        padding: '20px',
        margin: '25px 8px 8px 8px',
        position: 'relative'
    },
    Container: {
        padding: '7px'
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
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        marginBottom: '20px',
        fontSize: '80%!important',
        height: '35px!important',
    },

    subPaper: {
        padding: '8px',
        backgroundColor: 'rgb(248, 109, 150)',
        boxShadow: '0px 3px 5px -1px rgb(80 80 80 / 20%), 0px 6px 10px 0px rgb(80 80 80 / 14%), 0px 1px 18px 0px rgb(80 80 80 / 12%)',
        borderRadius: '8px',
    },
    timeField: {
        background: 'white',
        borderRadius: '8px',
        color: 'black',
    },
    icon: {
        position: 'absolute',
        top: '-2px',
        left: '-25px'
    },
    linkbtn: {
        borderRadius: "25px",
    },
}));

export const Dxlockv1 = () => {
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

    const loading = true;

    let loadingContent;
    let header;

    if (!account) {
        header = (
            <ConnectHeaderThree connectWallet={connectWallet} />
        )
    } else {
        header = (
            <ConnectHeaderTwo networkName={networkName} unit="ETH" wallet={account} balance={balance} />
        )
    }

    if (loading) {
        loadingContent = (
            <LoadingCard text="Please wait as locker data is loaded. This can take 3 to 4 minutes." />
        )
    } else {
        loadingContent = (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                {header}
                <Card className={classes.Card}>
                    <CustomCardTitle iconUrl="/images/card/dx-lock.png" headerIcon="0" headerTitle="View All Lockers In DxLock" />
                    <div>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            className={classes.tabs}
                        >
                            <Tab label="LIQUIDITY LOCKER" />
                        </Tabs>
                        <div className={classes.tabContent}>
                            <CustomTabPanel value={value} index={0} dir={theme.direction}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Fab variant="extended" href="/app/pages/dxlockcreate" color="primary" size="medium" className={classes.Fab}>
                                            LOCK OR MANAGE LIQUIDITY
                                        </Fab>
                                    </Grid>
                                    <Grid item xs={6} className={'pl3'}>
                                        <CustomNormalInput disabled="true" placeholder="Search by token address, pair address, token name or symbol!" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <Button href="/app/pages/dxlock?chain=ETH" target="_blank" size="large" className={classes.linkbtn}><span className={'fs8 fw6 textBlue'}>V2 CONTRACTS</span></Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CustomTabPanel>
                        </div>
                    </div>
                </Card>
                <br />
                {loadingContent}
            </Container>
        </React.Fragment>
    );
}