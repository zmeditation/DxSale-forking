import React, { useEffect } from 'react';
import { Card, Container, Tabs, Tab, Fab, Grid, Paper, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ConnectHeaderTwo } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { ConnectHeaderThree } from '../../component/ConnectHeaderComponent/ConnectHeaderThree';
import { CustomCardTitle } from '../../component/CardConstructComponent/CustomCardTitle';
import CustomTabPanel from '../../component/CardConstructComponent/CustomTabPanel';
import CustomNormalInput from '../../component/CustomBaseComponent/CustomNormalInput';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { CustomLockPan } from '../../component/LockComponent/CustomLockPan';
import { LoadingCard } from '../../component/CardConstructComponent/LoadingCard';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: '-webkit-center',
        color: 'white'
    },
    Card: {
        padding: '20px',
        margin: '20px 8px 8px 8px',
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
    }
}));

export const Viewlockers = () => {
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

    if (account) {
        header = (
            <ConnectHeaderTwo networkName={networkName} unit="ETH" wallet={account} balance={balance} />
        )
    } else {
        header = (
            <ConnectHeaderThree connectWallet={connectWallet} />
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
                            <Tab label="TOKEN LOCKER" />
                        </Tabs>
                        <div className={classes.tabContent}>
                            <CustomTabPanel value={value} index={0} dir={theme.direction}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Fab variant="extended" href="/app/v2_9/dxlockcreate" color="primary" size="medium" className={classes.Fab}>
                                            LOCK OR MANAGE LIQUIDITY
                                        </Fab>
                                    </Grid>
                                    <Grid item xs={6} className={'pl3'}>
                                        <CustomNormalInput disabled="true" placeholder="Search by token address, pair address, token name or symbol!" />
                                    </Grid>
                                    <Grid item xs={3}></Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <CustomLockPan id="0" add="0x154922E74D108B1f92d702529b31027de54A1933" type="lplock" chain="ETH" route="/app/v2_9/dxlockview">
                                            <div>
                                                <p className={'fwbold fs125em'}>HERO/WETH</p>
                                                <div className={'pl3'}>
                                                    <p className={'fs115em '}><span className={'por'}><CalendarTodayIcon className={classes.icon} />3 Aug 2022 at 02:59</span></p>
                                                </div>
                                                <br />
                                                <Paper className={classes.subPaper}>
                                                    <p className={'textWhite fs115em mg1'}>DxLock Liquidity Locker</p>
                                                    <div className={classes.timeField}>
                                                        <p className={'fs115em mg1'}>347:03:47:38</p>
                                                    </div>
                                                </Paper>
                                                <br />
                                                <br />
                                                <Divider />
                                                <br />
                                                <p className={'mg0 fs115em'}>Token Address:</p>
                                                <p className={'mg0 fs115em'}>0x83c0...822e</p>
                                            </div>
                                        </CustomLockPan>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CustomLockPan id="0" add="0x154922E74D108B1f92d702529b31027de54A1933" type="lplock" chain="ETH" route="/app/v2_9/dxlockview">
                                            <div>
                                                <p className={'fwbold fs125em'}>HERO/WETH</p>
                                                <div className={'pl3'}>
                                                    <p className={'fs115em '}><span className={'por'}><CalendarTodayIcon className={classes.icon} />3 Aug 2022 at 02:59</span></p>
                                                </div>
                                                <br />
                                                <Paper className={classes.subPaper}>
                                                    <p className={'textWhite fs115em mg1'}>DxLock Liquidity Locker</p>
                                                    <div className={classes.timeField}>
                                                        <p className={'fs115em mg1'}>347:03:47:38</p>
                                                    </div>
                                                </Paper>
                                                <br />
                                                <br />
                                                <Divider />
                                                <br />
                                                <p className={'mg0 fs115em'}>Token Address:</p>
                                                <p className={'mg0 fs115em'}>0x83c0...822e</p>
                                            </div>
                                        </CustomLockPan>
                                    </Grid>
                                </Grid>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1} dir={theme.direction}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Fab variant="extended" href="/app/v2_9/dxlocktokencreate" color="primary" size="medium" className={classes.Fab}>
                                            LOCK OR MANAGE TOKENS
                                        </Fab>
                                    </Grid>
                                    <Grid item xs={6} className={'pl3'}>
                                        <CustomNormalInput disabled="true" placeholder="Search by token address, pair address, token name or symbol!" />
                                    </Grid>
                                    <Grid item xs={3}></Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <CustomLockPan id="0" add="0x154922E74D108B1f92d702529b31027de54A1933" type="tokenlock" chain="ETH" route="/app/v2_9/dxlockview">
                                            <div>
                                                <p className={'fwbold fs125em'}>DxSale.Network</p>
                                                <div className={'pl3'}>
                                                    <p className={'fs115em '}><span className={'por'}><CalendarTodayIcon className={classes.icon} />3 Aug 2022 at 02:59</span></p>
                                                </div>
                                                <div className={'pl3'}>
                                                    <p className={'fs115em '}><span className={'por'}><CalendarTodayIcon className={classes.icon} />403:22:48:02</span></p>
                                                </div>
                                                <br />
                                                <div className={'pl3'}>
                                                    <p className={'fs115em '}><span className={'por'}><CalendarTodayIcon className={classes.icon} />108276</span></p>
                                                </div>
                                                <p className={'fs115em '}>Vesting Percent: 4</p>
                                                <p className={'mg0 fs115em'}>Token Address:</p>
                                                <p className={'mg0 fs115em'}>0x83c0...822e</p>
                                            </div>
                                        </CustomLockPan>
                                    </Grid>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={4}></Grid>
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