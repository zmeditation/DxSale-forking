import React from 'react';
import { Card, Container, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: '-webkit-center',
        color: 'white'
    },
    Card: {
        padding: '20px',
        margin: '8px',
        position: 'relative'
    },
    Container: {
        padding: '7px'
    },
    img: {
        height: '40%',
        width: '100%',
        marginBottom: '20px',
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        position: 'absolute',
        bottom: '20px'
    },
    Grid: {
        display: 'flex',
    }
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                <Grid container>
                    <Grid item xs={6} className={classes.Grid}>
                        <Card className={classes.Card}>
                            <div>
                                <img className={classes.img} src={window.location.origin + '/images/card/home_card_1.png'} />
                            </div>
                            <div>
                                <span className={'fs8'}>
                                    DxMint allows anyone to create tokens without any coding experience. Tokens created on this App will be verified on DxLaunch.
                                </span>
                            </div>
                            <div className={'mt3 fs8'}>
                                <span>
                                    <p className={'textRed'}>
                                        Features:
                                    </p>
                                    <p>
                                        - Mint Standard or custom DeFi tokens without any coding required
                                    </p>
                                    <p>
                                        - Mint tokens on ETH, BSC, MATIC, AVAX, FANTOM, xDAI, Harmony
                                    </p>
                                    <p>
                                        - All Minted tokens are considered verified on DxLaunch platform
                                    </p>
                                </span>
                            </div>
                            <div>
                                <Fab variant="extended" href="/" size="medium" color="primary" className={classes.Fab}>
                                    START DXMINT APP
                                </Fab>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} className={classes.Grid}>
                        <Card className={classes.Card}>
                            <div>
                                <img className={classes.img} src={window.location.origin + '/images/card/home_card_2.png'} />
                            </div>
                            <div>
                                <span className={'fs8'}>
                                    DxLaunch is an open, decentralized platform for token sales. Create sales in seconds with a simple decentralized form.
                                </span>
                            </div>
                            <div className={'mt3 mb6 fs8'}>
                                <span>
                                    <p className={'textRed'}>
                                        Features:
                                    </p>
                                    <p>- Use a DxMint token or your own custom token</p>
                                    <p>- 100% decentralized end to end</p>
                                    <p>- Instant creation of your Token Sale</p>
                                    <p>- Listing of your sale on our dashboard</p>
                                    <p>- Display Logos and Links to your own media</p>
                                    <p>- Easy to use Token Sale Portal for users</p>
                                    <p>- Included DEX Pair Addition</p>
                                    <p>- Included DEX Liquidity Locking</p>
                                    <p>- Admin Token Sale Management Portal</p>
                                </span>
                            </div>
                            <div>
                                <Fab variant="extended" href="/" size="medium" color="primary" className={classes.Fab}>
                                    START DXLAUNCH APP
                                </Fab>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} className={classes.Grid}>
                        <Card className={classes.Card}>
                            <div>
                                <img className={classes.img} src={window.location.origin + '/images/card/home_card_3.png'} />
                            </div>
                            <div>
                                <span className={'fs8'}>
                                    DxLock is our Locking Dapp for Liquidity / Token locking
                                </span>
                            </div>
                            <div className={'mt3 mb10 fs8'}>
                                <span>
                                    <p className={'textRed'}>
                                        Features:
                                    </p>
                                    <p>- Lock your liquidity tokens using our liquidity locker</p>
                                    <p>- Lock any token with a standard transfer function</p>
                                    <p>- Dashboard to show your locked liquidity or tokens</p>
                                    <p>- Vest your tokens to release periodically</p>
                                    <p>- Increase the duration of your locks without withdrawing liquidity</p>
                                </span>
                            </div>
                            <div>
                                <Fab variant="extended" href="/" size="medium" color="primary" className={classes.Fab}>
                                    START DXLAUNCH APP
                                </Fab>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}