import React, { useEffect } from 'react';
import { Card, Container, Tabs, Tab, Grid, Fab } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ConnectHeaderFour } from '../../component/ConnectHeaderComponent/ConnectHeaderFour';
import { ConnectHeaderTwo_Offline } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo_Offline';
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
        marginTop: '9px',
        boxShadow: '0 5px 57px #98989d7a',
        padding: '20px',
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontWeight: 600,
            lineHeight: 1.75,
        },
        margin: '5px',
        fontSize: '70%!important',
        height: '35px!important',
        width: '100%!important'
    },
}));

export const Dxstake = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { account, connect, reset, status } = useWallet();
    useEffect(() => {
        if (!account) {
            if (status === "disconnected") {
                connect();
            } else {
                reset();
            }
        }
    }, [account])

    const connectWallet = () => {
        connect('injected');
    }

    let connectHeader;
    if (!account) {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderFour connectWallet={connectWallet} />
            </div>
        )
    } else {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderTwo_Offline />
            </div>
        )
    }
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                {connectHeader}
                <div>
                    <Card className={classes.Card}>
                        <CustomCardTitle headerIcon="0" iconUrl="/images/card/dx-stake.png" headerTitle="Staking And Revenue Sharing Services" />
                        <div className={classes.content}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                className={classes.tabs}
                            >
                                <Tab label="STAKING" />
                                <Tab label="METRICS" />
                                <Tab label="AIRDROP" />
                            </Tabs>
                            <div className={classes.tabContent}>
                                <CustomTabPanel value={value} index={0} dir={theme.direction}>
                                    <Grid container>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={6}>
                                            <Card className={classes.formCard}>
                                                <Grid container>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Fab variant="extended" color="primary" size="medium" className={classes.Fab}>
                                                            Staking
                                                        </Fab>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <br />
                                                <p className={'mg1 fs1em'}>Not migrated yet please visit</p>
                                                <a href="https://staking.dxsale.network/" className={'mg0 fs1em textBlue'}>staking.dxsale.network</a>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={3}></Grid>
                                    </Grid>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1} dir={theme.direction}>
                                    <Grid container>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={6}>
                                            <Card className={classes.formCard}>
                                                <Grid container>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Fab variant="extended" color="primary" size="medium" className={classes.Fab}>
                                                            Metrics
                                                        </Fab>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <br />
                                                <p className={'mg1 fs1em'}>Not migrated yet please visit</p>
                                                <a href="https://staking.dxsale.network/" className={'mg0 fs1em textBlue'}>staking.dxsale.network</a>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={3}></Grid>
                                    </Grid>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2} dir={theme.direction}>
                                    <Grid container>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={6}>
                                            <Card className={classes.formCard}>
                                                <Grid container>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Fab variant="extended" color="primary" size="medium" className={classes.Fab}>
                                                            Airdrop
                                                        </Fab>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <br />
                                                <p className={'mg1 fs1em'}>Not migrated yet please visit</p>
                                                <a href="https://staking.dxsale.network/" className={'mg0 fs1em textBlue'}>staking.dxsale.network</a>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={3}></Grid>
                                    </Grid>
                                </CustomTabPanel>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}