import React from 'react';
import { Card, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@material-ui/core';

import HeadsetIcon from '@material-ui/icons/Headset';
import WarningIcon from '@material-ui/icons/Warning';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import TelegramIcon from '@material-ui/icons/Telegram';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

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
    header: {
        display: 'flex',
        marginBottom: '40px'
    },
    headerIcon: {
        width: '48px',
        border: '1px solid rgb(234, 232, 244)',
        height: '48px',
        background: 'rgb(246, 243, 250)',
        boxShadow: '0 2px 15px #7c4dff',
        textAlign: 'center',
        lineHeight: '44px',
        marginRight: '24px',
        borderRadius: '8px',
        verticalAlign: 'middle',
        color: '#7C4DFF',
        '& .MuiSvgIcon-root': {
            height: '2em'
        }
    },
    headerTitle: {
        color: '#311B92',
        position: 'relative',
        fontSize: '100%',
        fontWeight: '400',
        textTransform: 'capitalize',
    },
    linkContent: {
        background: '#fafafa',
        padding: '10px',
        borderRadius: '8px',
        lineHeight: '1.5',
        textAlign: 'center',
    },
    paper: {
        width: '100%',
        backgroundColor: '#fafafa',
        textAlign: 'center',
        color: '#383737',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '15px',
        '& svg': {
            color: '#acb9dd',
            fontSize: '35px'
        }
    },
    link: {
        textDecoration: 'none!important',
        width: '100%',
    },
    LinkPan: {
        padding: '20px',
        '& .MuiLink-root:hover': {
            '& .MuiPaper-root': {
                backgroundColor: '#8D79F8',
                color: 'white'
            },
        }
    },
}));

export const Dxsupport = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.Container}>
                <Card className={classes.Card}>
                    <div className={classes.header}>
                        <span className={classes.headerIcon}><HeadsetIcon size="large" /></span>
                        <p className={classes.headerTitle}>DxSupport</p>
                    </div>
                    <div>
                        <div className={classes.linkContent}>
                            <p className={'fs15em mg1 fw6'}>Useful Links</p>
                            <Grid container>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://docs.dxsale.network/'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <CollectionsBookmarkIcon />
                                            <br />
                                            Documentation
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://t.me/dxdevs'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <TelegramIcon />
                                            <br />
                                            Community Support
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://form.asana.com/?k=bqjnL6AQOwNFNiO1eZ0HIA&d=1200140312491549'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <WarningIcon />
                                            <br />
                                            Finalize Cancel Form
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://form.asana.com/?k=1XD0OLIIf7lJA-OEGDH-hA&d=1200140312491549'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <WbIncandescentIcon />
                                            <br />
                                            Submit an Idea
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://www.youtube.com/watch?v=mCtKQAWtWfE'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <OndemandVideoIcon />
                                            <br />
                                            Token Creation Tutorial
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                                <Grid item xs={4} className={classes.LinkPan}>
                                    <MaterialLink
                                        component={RouterLink}
                                        to='https://www.youtube.com/watch?v=iAZVoOONAIg&t=15s'
                                        className={classes.link}
                                    >
                                        <Paper elevation={3} className={classes.paper}>
                                            <OndemandVideoIcon />
                                            <br />
                                            Contributing Tutorial
                                        </Paper>
                                    </MaterialLink>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Card>
            </Container>
        </React.Fragment>
    );
}