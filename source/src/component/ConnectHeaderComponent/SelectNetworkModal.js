
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Modal, Divider, Button } from '@material-ui/core';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles(theme => ({
    root: {
        color: 'blue[600]',
        '&$checked': {
            color: 'blue[500]',
        },
    },
    checked: {},
    paper: {
        backgroundColor: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        margin: 'auto',
        width: '37%',
        padding: '20px 15px 35px 15px',
    },
    content: {
        textAlign: 'left',
    },
    modal: {
        overflow: 'scroll',
        display: 'flex',
        width: '100%',
        textAlign: 'center',
    },
    networkIcon: {
        width: '100%',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        height: '45px',
        marginTop: '5px',
        wordWrap: 'break-word',
        borderRadius: '5px',
        textAlign: 'left',
        '& img': {
            width: "20px",
            marginRight: '10px',
        },
        '& .MuiButton-label': {
            justifyContent: 'unset'
        },
    },
    closebtn: {
        backgroundColor: 'white',
        float: 'right',
        fontSize: '3px',
        border: 0,
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'blue',
            color: 'white'
        }
    },
    black: {
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#858484',
            color: 'black'
        }
    },
    yellow: {
        backgroundColor: '#EEB90B',
        '&:hover': {
            backgroundColor: '#e6d087',
            color: 'black'
        }
    },
    blue: {
        backgroundColor: '#8247E6',
        '&:hover': {
            backgroundColor: '#ad88ea',
            color: 'black'
        }
    },
    green: {
        backgroundColor: '#23AF91',
        '&:hover': {
            backgroundColor: '#74ccb9',
            color: 'black'
        }
    },
    turquoise: {
        backgroundColor: '#43b9b5',
        '&:hover': {
            backgroundColor: '#88d6d3',
            color: 'black'
        }
    },
    red: {
        backgroundColor: '#df6262',
        '&:hover': {
            backgroundColor: '#e49f9f',
            color: 'black'
        }
    },
    navy: {
        backgroundColor: '#1b9bc5',
        '&:hover': {
            backgroundColor: '#6cbad4',
            color: 'black'
        }
    },
    lightgreen: {
        backgroundColor: '#00D5B8',
        '&:hover': {
            backgroundColor: '#69cabc',
            color: 'black'
        }
    },
    darkgreenDisable: {
        backgroundColor: '#3D8444',
        opacity: 0.5,
        '&:hover': {
            color: 'black',
            cursor: 'not-allowed',
            backgroundColor: '#a0a9a1'
        }
    },
    lightblueDisable: {
        backgroundColor: '#1f61b8',
        opacity: 0.5,
        '&:hover': {
            color: 'black',
            backgroundColor: '#a0a9a1',
            cursor: 'not-allowed',
        }
    },
}));

export const SelectNetworkModal = (props) => {
    const classes = useStyle();
    const { showStatus, modalShowHandle, switchClick } = props;

    const networkSwitch = value => () => {
        switchClick(value);
    }

    const modalClose = () => {
        modalShowHandle(false);
    }
    return (
        <Modal
            open={showStatus}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
        >
            <Grid container>
                <div className={classes.paper}>
                    <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <p className={'fs10 mg0 fwbold'}>
                                Select a Supported Network
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <button onClick={modalClose} className={classes.closebtn}>
                                <CloseIcon />
                            </button>
                        </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                    <p className={'fs8 mg0'}>Main Networks</p>
                    <Button onClick={networkSwitch(1)} className={clsx(classes.networkIcon, classes.black)}>
                        <img src={window.location.origin + "/images/network/img_eth.png"} />
                        <p>Ethereum</p>
                    </Button>
                    <Button onClick={networkSwitch(56)} className={clsx(classes.networkIcon, classes.yellow)}>
                        <img src={window.location.origin + "/images/network/img_bsc.png"} />
                        <p>Binance Smart Chain</p>
                    </Button>
                    <Button onClick={networkSwitch(137)} className={clsx(classes.networkIcon, classes.blue)}>
                        <img src={window.location.origin + "/images/network/img_poly.png"} />
                        <p>Polygon</p>
                    </Button>
                    <Button onClick={networkSwitch(321)} className={clsx(classes.networkIcon, classes.green)}>
                        <img src={window.location.origin + "/images/network/img_kucoin.png"} />
                        <p>Kucoin Chain</p>
                    </Button>
                    <Button onClick={networkSwitch(100)} className={clsx(classes.networkIcon, classes.turquoise)}>
                        <img src={window.location.origin + "/images/network/img_xdai.png"} />
                        <p>xDai</p>
                    </Button>
                    <Button onClick={networkSwitch(43114)} className={clsx(classes.networkIcon, classes.red)}>
                        <img src={window.location.origin + "/images/network/img_avalan.png"} />
                        <p>Avalanche</p>
                    </Button>
                    <Button onClick={networkSwitch(250)} className={clsx(classes.networkIcon, classes.navy)}>
                        <img src={window.location.origin + "/images/network/img_fantom.png"} />
                        <p>Fantom</p>
                    </Button>
                    <Button onClick={networkSwitch(1666600000)} className={clsx(classes.networkIcon, classes.lightgreen)}>
                        <img src={window.location.origin + "/images/network/img_harmoney.png"} />
                        <p>Harmoney</p>
                    </Button>
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <p className={'fs8 mg0'}>Test Networks</p>
                    <Button onClick={networkSwitch(3)} className={clsx(classes.networkIcon, classes.black)}>
                        <img src={window.location.origin + "/images/network/img_eth.png"} />
                        <p>Ropsten</p>
                    </Button>
                    <Button onClick={networkSwitch(56)} className={clsx(classes.networkIcon, classes.yellow)}>
                        <img src={window.location.origin + "/images/network/img_bsc.png"} />
                        <p>BSC Testnet</p>
                    </Button>
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <p className={'fs8 mg0'}>Coming Soon</p>
                    <Button onClick={networkSwitch('bsc')} className={clsx(classes.networkIcon, classes.darkgreenDisable)}>
                        <img src={window.location.origin + "/images/network/img_heco.png"} />
                        <p>Heco</p>
                    </Button>
                    <Button onClick={networkSwitch('bsc')} className={clsx(classes.networkIcon, classes.lightblueDisable)}>
                        <img src={window.location.origin + "/images/network/img_okex.png"} />
                        <p>OKEx</p>
                    </Button>
                </div>
            </Grid>
        </Modal>
    );
}