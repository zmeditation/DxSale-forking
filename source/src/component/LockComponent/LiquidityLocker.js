import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Fab, Button, Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    formCard: {
        marginTop: '15px',
        boxShadow: '0 5px 57px #98989d7a',
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        alignItems: 'center',
    },
    img: {
        width: '64px',
        height: '64px',
        visibility: 'hidden',
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
    linkbtn: {
        borderRadius: "25px",
    },
    Certify: {
        backgroundColor: 'rgb(158, 122, 255)',
        borderRadius: '20px',
        padding: '10px',
        width: '100%',
        boxShadow: '0px 6px 6px -3px rgb(80 80 80 / 20%), 0px 10px 14px 1px rgb(80 80 80 / 14%), 0px 4px 18px 3px rgb(80 80 80 / 12%)',
        color: 'white',
    },
    CertifyContent: {
        marginTop: '15px',
        boxShadow: '0 5px 57px #98989d7a',
        padding: '10px',
        textAlign: 'center',
    },
    lockimg: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    },
    infoStart: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
    },
    infoEnd: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
    },
    table: {
        '& .MuiTableCell-root': {
            fontSize: '60%',
            padding: '6px',
        }
    },
    button: {
        borderRadius: "25px",
    }
}));

function createData(date, tokens) {
    return { date, tokens };
}

const rows = [
    createData('16 Aug 2021 at 23:58', '4331.0422'),
];

export const LiquidityLocker = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const Back = () => {
        history.push("/app/v2_9/dxlock");
    };
    return (
        <Card className={classes.formCard}>
            <Grid container className={classes.header}>
                <Grid item xs={2}>
                    <Button onClick={Back} size="small" className={classes.button}>
                        <ArrowBackIcon fontSize="medium" />
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Fab variant="extended" color="primary" size="medium" className={classes.Fab}>
                        LP Token Locker
                    </Fab>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={Back} size="small" className={classes.button}>
                        <ShareIcon fontSize="medium" />
                    </Button>
                </Grid>
            </Grid>
            <img src={window.location.origin + '/images/dx-logo.png'} className={classes.img} />
            <div>
                <p className={'fs1em mg1'}>Sale</p>
                <p className={'fs1em mg1 fwbold'}>DXSale.Network</p>
            </div>
            <br />
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <Button href="https://etherscan.io/address/0x83c031b415D58f1bf777aE37582A31bD5068822e" size="large" className={classes.linkbtn}><span className={'fs8 textGrey'}>HERO ADRESS</span></Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button href="https://etherscan.io/address/0x5D2dd39191196d764c6fD33Dc488Caf13aF482ac" size="large" className={classes.linkbtn}><span className={'fs8 textGrey'}>SALE ADRESS</span></Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button href="https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" size="large" className={classes.linkbtn}><span className={'fs8 textGrey'}>WETH ADRESS</span></Button>
                    </Grid>
                </Grid>
            </div>
            <br />
            <div className={classes.Certify}>
                <strong>
                    DxLock Certified Token Locker
                </strong>
                <Card className={classes.CertifyContent}>
                    <img src={window.location.origin + '/images/card/lock.png'} className={classes.lockimg}></img>
                    <p className={'mg0'}>403:15:11:31</p>
                </Card>
            </div>
            <br />
            <div>
                <Grid container>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Total LP Tokens</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>334664.01061372587</p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Locked LP Tokens</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>334664.01061372587</p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Unlock Date</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>3 Aug 2022 at 02:59</p>
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <Divider />
            <br />
            <div>
                <p className={'textRed fs8'}>
                    Please be aware that only the LP Tokens are locked in the contract. Circulating tokens are not locked here and any unlocked circulating tokens can be sold at any time to withdraw the underlying liquidity! Please always do strong research before investing in any products.
                </p>
            </div>
        </Card>
    );
}