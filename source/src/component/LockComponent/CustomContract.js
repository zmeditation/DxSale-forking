import React from 'react';
import { Card, Divider, IconButton, Button, Grid, Chip, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { StarOutline } from '@material-ui/icons';
import { OpenInNew } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    Card: {
        padding: '24px'
    },
    header: {
        display: 'flex',
        marginBottom: '40px',
        textAlign: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'left',
    },
    img: {
        width: '55px',
        height: '55px',
        marginRight: '10px',
        marginBottom: '5px',
    },
    p1: {
        color: 'blue',
        margin: '0px',
        fontSize: '80%',
    },
    p2: {
        fontSize: '80%',
        margin: '0px',
    },
    ul: {
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        textAlign: 'center',
        justifyContent: 'center',
        '& li': {
            margin: '24px 8px 16px',
        },
        '& .li1': {
            color: '#7C4DFF',
            marginBottom: '0.35em',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        '& .li2': {
            marginBottom: '0.35em',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        '& .li3': {
            marginBottom: '0.35em',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        '& .li4': {
            marginBottom: '0.35em',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
    },
    mainCard: {
        padding: '1px 16px',
        borderRadius: '4px',
        justifyContent: 'space-around',
    },
    circular: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
    },
    footerCard: {
        marginTop: '20px',
        textAlign: 'center',
    },
    icon: {
        '& .MuiSvgIcon-root': {
            width: '16px',
        },
        padding: '0px',
    },
    chip: {
        top: 58,
        position: 'absolute',
        fontSize: 11,
        fontWeight: 400,
    },
    centerItem: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    progressCircle: {
        borderRadius: '50%',
        background: 'rgba(178, 178, 178, 0.12)',
    }
}));

export const CustomContract = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { version } = props;
    let linkUrl;

    if (version == "default") {
        linkUrl = "/app/v2_9/defipresale";
    } else if (version == 'v2.5') {
        linkUrl = "/app/pages/defipresale";
    } else if (version == 'v1') {
        linkUrl = "/app/pages/defipresalev1";
    } else if (version == 'launch') {
        linkUrl = "/app/pages/presale";
    }

    return (
        <Card className={classes.Card}>
            <div className={classes.header}>
                <div>
                    <img className={classes.img} src="https://i.ibb.co/GxgB9dP/photo-2021-08-19-06-37-20.jpg" />
                </div>
                <div className={classes.headerTitle}>
                    <p className={classes.p1}>GPUNKS</p>
                    <p className={classes.p2}>GRUMPYDOGE PUNKS</p>
                </div>
            </div>
            <div
                id="mainCard"
                onMouseEnter={e => {
                    var myID = 'cardToChange';
                    var mainID = 'mainCard';
                    document.getElementById(myID).innerHTML = " Click for Details ";
                    document.getElementById(myID).style = 'Width: 100px'
                    document.getElementById(mainID).style = 'opacity: 0.6';
                }}
                onMouseLeave={e => {
                    var myID = 'cardToChange';
                    var mainID = 'mainCard';
                    document.getElementById(myID).innerText = 'Presale Live';
                    document.getElementById(mainID).style = 'background-color: primary';
                }}
                onClick={e => {
                    history.push(`${linkUrl}?saleID=33&chain=null`);
                }}
            >
                <div className={classes.centerItem}>
                    <Chip id={"cardToChange"} label={'Presale Live'} className={classes.chip} />
                    <CircularProgress variant="determinate" className={classes.progressCircle} size={140} thickness={4} value={80} />
                </div>
                <div className={classes.mainCard}>
                    <div className={classes.circular}></div>
                    <ul className={classes.ul}>
                        <li>
                            <span className={'li1'}>
                                Raised:{30.00} / {30}
                            </span>
                            <br />
                            <span className={'li2'}>Soft Cap: 15 ETH</span>
                            <br />
                            <span className={'li3'}>Min: 0.05 / Max: 1.00</span>
                            <br />
                            <span className={'li4'}>⚠️ Custom Contract</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Divider />
            <div className={classes.footerCard}>
                <Grid container>
                    <Grid item xs={2}>
                        <IconButton className={classes.icon} color="primary" disabled aria-label="upload picture" component="span">
                            <StarOutline />
                        </IconButton>
                    </Grid>
                    <Grid item xs={8}>
                        <p className={classes.p2}>
                            Presale
                            <br />
                            Ended
                        </p>
                    </Grid>
                    <Grid item xs={2}>
                        <Button href={`${linkUrl}?saleID=33&chain=null`} className={classes.icon} color="primary">
                            <OpenInNew />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
}