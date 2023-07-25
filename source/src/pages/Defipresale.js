import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Divider, Fab, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from '@material-ui/core';
import { PresaleDisclaimer } from '../component/DisclaimerComponent/PresaleDisclaimer';
import { ConnectHeaderThree } from '../component/ConnectHeaderComponent/ConnectHeaderThree';
import { ConnectHeaderTwo } from '../component/ConnectHeaderComponent/ConnectHeaderTwo';
import CircularProgress from '@material-ui/core/CircularProgress';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import RedditIcon from '@material-ui/icons/Reddit';
import TelegramIcon from '@material-ui/icons/Telegram';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    Container: {
        padding: '7px'
    },
    Card: {
        margin: '20px 8px 8px 8px',
        padding: '10px'
    },
    SubCard: {
        boxShadow: '0 5px 57px #98989d7a',
        padding: '15px',
        margin: '8px',
        wordBreak: 'break-word',
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        margin: '30px 5px 5px'
    },
    linkIconContent: {
        textAlign: 'center',
    },
    icon: {
        marginLeft: '20px',
        fontSize: '21px',
        color: '#2196f3',
    },
    img: {
        width: '64px',
        height: '64px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
    },
    headerTitle: {
        flex: 1,
        textAlign: 'left',
    },
    p1: {
        color: 'blue',
        fontSize: '100%',
    },
    p2: {
        fontSize: '100%',
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

const useStylesFacebook = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    top: {
        color: '#1a90ff',
        animationDuration: '550ms',
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

function FacebookCircularProgress(props) {
    const classes = useStylesFacebook();

    return (
        <div className={classes.root}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </div>
    );
}


function createData(id, amount) {
    return { id, amount };
}

const rows = [
    createData('Total Supply', '50000000000.0000 PumpETH'),
];

export const Defipresale = () => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(true);
    const [confirm, setConfirm] = useState('false');

    let connectStart = true;

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

    const modalShowHandle = (value) => {
        setModalOpen(value)
    }
    const modalShow = () => {
        setModalOpen(true)
    }
    const confirmHandle = (status) => {
        setConfirm(status);
    }
    let startManage;
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

    if (confirm == 'false') {
        startManage = (
            <Container className={classes.Container}>
                <Card className={classes.Card}>
                    <p className={'mg0'}>Disclaimer not accepted. Please accept the disclaimer to continue!</p>
                    <Fab variant="extended" color="primary" onClick={modalShow} size="medium" className={classes.Fab}>
                        OPEN DISCLAIMER
                    </Fab>
                </Card>
                <PresaleDisclaimer confirmHandle={confirmHandle} showStatus={modalOpen} modalShowHandle={modalShowHandle} />
            </Container>
        )
    } else {
        if (connectStart == 'false') {
            startManage = (
                <Container className={classes.Container}>
                    {header}
                    <Card className={classes.Card}>

                    </Card>
                    <Card className={classes.Card}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Card className={classes.SubCard}>
                                    <p className={'fs8 mb3'}>DxSale Automated Warning System</p>
                                    <p className={'fs8'}>1 Warnings Detected</p>
                                    <p className={'mg0 fs8 textRed'}>DeFi Zone Warning</p>
                                    <p className={'fs8 mg0'}>This sale is listed in the DeFi Zone. Presales in this area use custom contracts that are not vetted by the DxSale team. Developers of tokens in this area can block transfers, can stop users from claiming tokens, can stop trading on exchanges and requires extra vetting. Participate at your own risk!</p>
                                    <p className={'fs8 mg0 textRed'}>(You could lose your funds)</p>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.SubCard}>
                                    <div className={'textCenter'}>
                                        <div className={'mb3 textLeft'}>
                                            <FacebookCircularProgress />
                                        </div>
                                        <br />
                                        <Divider />
                                        <br />
                                        <p className={'mg0 fs8'}>
                                            Presale Address won't be displayed until tokens are deposited!
                                        </p>
                                        <p className={'mg0 fs8'}>
                                            Sending Money To a Sale without Deposited Tokens is very risky!
                                        </p>
                                        <br />
                                        <p className={'fs8 ml10 mg0'}>Token Address: <a href="https://etherscan.io/address/0x">0x</a></p>
                                        <p className={'fs8 ml10 textRed mg0'}>Do not send ETH to the token address!</p>
                                        <p className={'fs8'}>⚠️ This Token uses a Custom Contract</p>
                                        <Divider />
                                        <br />
                                        <p className={'mg0'}>Presale Starts in:</p>
                                        <p className={'mg0'}>18842990:18:28:58</p>
                                        <br />


                                        <Divider />
                                        <br />
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card className={classes.SubCard}>
                                                    <p className={'mg0 fs9'}>Your Contributed Amount:</p>
                                                    <p className={'mg0 fs9'}>0.00 ETH</p>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Card className={classes.SubCard}>
                                                    <p className={'mg0 fs9'}>Your Reserved Tokens:</p>
                                                    <p className={'mg0 fs9'}>0</p>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Divider />
                                        <div className={'mb6'}></div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card className={classes.SubCard}>

                                </Card>
                            </Grid>
                        </Grid>
                    </Card>
                </Container >
            )
        } else {
            startManage = (
                <Container className={classes.Container}>
                    {header}
                    <Card className={classes.Card}>
                        <Grid container className={classes.linkIconContent}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={2}>
                                <Button className={classes.icon} href="https://pumpeth.finance/">
                                    <PublicIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button className={classes.icon} href="https://twitter.com/OfficialPumpETH">
                                    <TwitterIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button className={classes.icon} href="https://pumpeth.finance/">
                                    <RedditIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button className={classes.icon} href="https://reddit.com/r/OfficialPumpETH">
                                    <TelegramIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.Card}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Card className={classes.SubCard}>
                                    <p className={'fs8 textCenter mb3'}>Useful Links</p>
                                    <a className={'fs8'} href="https://dextools.io/app/uniswap/pair-explorer/0x1a4154aA3FC63888a4181064e0A91f6E3382594D">Dextools Charts 📈</a>
                                    <p className={'fs8 mg0'}>https://dextools.io/app/uniswap/pair-</p>
                                    <p className={'fs8 mg0'}>explorer/0x1a4154aA3FC63888a4181064e0A91f6E3382594D</p>
                                </Card>
                                <Card className={classes.SubCard}>
                                    <p className={'fs8 mb3'}>DxSale Automated Warning System</p>
                                    <p className={'fs8'}>4 Warnings Detected</p>
                                    <p className={'mg0 fs8 textRed'}>DeFi Zone Warning</p>
                                    <p className={'fs8 mg0'}>This sale is listed in the DeFi Zone. Presales in this area use custom contracts that are not vetted by the DxSale team. Developers of tokens in this area can block transfers, can stop users from claiming tokens, can stop trading on exchanges and requires extra vetting. Participate at your own risk!</p>
                                    <p className={'fs8 mg0 textRed'}>(You could lose your funds)</p>
                                    <br />
                                    <p className={'mg0 fs8 textRed'}>Soft Cap Warning</p>
                                    <p className={'fs8 mg0'}>The softcap of this sale is very low.</p>
                                    <br />
                                    <p className={'mg0 fs8 textRed'}>Token Dump Warning</p>
                                    <p className={'fs8 mg0'}>Too many tokens are held outside this sale. Make sure these tokens are burned, locked or the owner has a valid reason to hold them. Tokens held by teams can be sold to pull out liquidity and should be carefully examined.</p>
                                    <br />
                                    <p className={'mg0 fs8 textRed'}>Liquidity Percentage Warning</p>
                                    <p className={'fs8 mg0'}>This sale has a very low liquidity percentage.</p>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.SubCard}>
                                    <div className={'textCenter'}>
                                        <div className={'textLeft'}>
                                            <div className={classes.header}>
                                                <img src={window.location.origin + '/images/dx-logo.png'} className={classes.img} />
                                                <div className={classes.headerTitle}>
                                                    <p className={classes.p1}>PumpETH</p>
                                                    <p className={classes.p2}>PumpETH</p>
                                                </div>
                                            </div>
                                            <p className={'fs8'}>Earn ETH while Holding PumpETH ⧫</p>
                                        </div>
                                        <br />
                                        <Divider />
                                        <br />
                                        <p className={'mg0 textLeft fs8'}>
                                            Presale Address: <a href="https://etherscan.io/address/0x" target="_blank">0x7d93950DE9C9Deead76e0f10c949ceaf64B5eeC8</a>
                                        </p>
                                        <br />
                                        <p className={'mg0 textLeft fs8'}>
                                            Token Address: <a href="https://etherscan.io/address/0x" target="_blank">0x7d93950DE9C9Deead76e0f10c949ceaf64B5eeC8</a>
                                        </p>
                                        <p className={'fs8 textRed mg0'}>Do not send ETH to the token address!</p>
                                        <p className={'fs8'}>⚠️ This Token uses a Custom Contract</p>
                                        <Divider />
                                        <br />
                                        <p className={'mg0 fs8'}>This presale has ended. Go back to the dashboard to view others!</p>
                                        <br />
                                        <Fab href="https://app.uniswap.org/static/media/logo_white.811f9ef7.svg" variant="extended" color="primary">
                                            TRADE ON UNISWAP
                                        </Fab>
                                        <br />
                                        <br />
                                        <p className={'mg0 fs8'}>If you participated in the presale please click the claim button below to claim your tokens!</p>
                                        <br />
                                        <Fab size="small" variant="extended" className={classes.FabGreen}>
                                            CLAIM TOKENS
                                        </Fab>
                                        <br />
                                        <br />
                                        <br />
                                        <Fab size="small" href="/app/v2_9/dxlockview?id=33&add=0&type=lpdefi&chain=ETH" variant="extended">
                                            DXLOCK LOCKER
                                        </Fab>
                                        <br />
                                        <br />
                                        <Divider />
                                        <br />
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card className={classes.SubCard}>
                                                    <p className={'mg0 fs9'}>Your Contributed Amount:</p>
                                                    <p className={'mg0 fs9'}>0.00 ETH</p>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Card className={classes.SubCard}>
                                                    <p className={'mg0 fs9'}>Your Reserved Tokens:</p>
                                                    <p className={'mg0 fs9'}>0</p>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Divider />
                                        <br />
                                        <br />
                                        <div className={'mb3'}>
                                            <TableContainer>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell align="right">Sale ID</TableCell>
                                                            <TableCell align="left">33</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map((row) => (
                                                            <TableRow key={row.id}>
                                                                <TableCell align="right" component="th" scope="row">
                                                                    {row.id}
                                                                </TableCell>
                                                                <TableCell align="left">{row.amount}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                        </Grid>
                    </Card>
                </Container >
            )
        }

    }
    return (
        <React.Fragment>
            {startManage}
        </React.Fragment>
    );
}