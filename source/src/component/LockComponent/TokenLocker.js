import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, IconButton, Grid, Fab, Button, Divider, Table, TableContainer, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
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

export const TokenLocker = () => {
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
                <Button size="small" className={classes.linkbtn}><span className={'fs7 textGrey'}>SALE ADRESS</span></Button>
            </div>
            <br />
            <div className={classes.Certify}>
                <strong>
                    DxLock Certified Token Locker
                </strong>
                <Card className={classes.CertifyContent}>
                    <img src={window.location.origin + '/images/card/lock.png'} className={classes.lockimg}></img>
                    <p className={'mg0'}>403:15:11:31</p>
                    <p className={'mg0 fs10'}>25 remaining payouts!</p>
                </Card>
            </div>
            <br />
            <div>
                <Grid container>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Total Supply</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>89683486.78134908</p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Tokens in Locker</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>108276.0559</p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>100% Unlock Date</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>29 Sep 2022 at 00:01</p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoStart}>
                        <p className={'mg0 fs8'}>Number of Vests</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p className={'mg0 fs8'}></p>
                    </Grid>
                    <Grid item xs={5} className={classes.infoEnd}>
                        <p className={'mg0 fs8'}>25</p>
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <Divider />
            <br />
            <br />
            <div>
                <p>Vesting Schedule</p>
                <TableContainer className={'classes.table'}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Vesting Period</TableCell>
                                <TableCell>Estimated Release Date</TableCell>
                                <TableCell>Tokens Released</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.tokens}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Card>
    );
}