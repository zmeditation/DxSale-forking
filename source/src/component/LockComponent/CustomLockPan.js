import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    LockPan: {
        padding: '20px',
        '& .MuiLink-root:hover': {
            '& .MuiPaper-root': {
                backgroundColor: 'rgb(240, 109, 150)',
                color: 'white'
            },
            '& hr': {
                backgroundColor: 'lightgrey',
            }
        }
    },
    link: {
        textDecoration: 'none!important',
        width: '100%',
    },
    paper: {
        padding: '10%',
        width: '100%',
        backgroundColor: '#fafafa',
        textAlign: 'center',
        color: '#383737',
    },
}));
export const CustomLockPan = (props) => {
    const classes = useStyles();
    const { id, add, type, chain, route, children } = props;
    return (
        <div className={classes.LockPan}>
            <MaterialLink
                component={RouterLink}
                to={`${route}?id=${id}&add=${add}&type=${type}&chain=${chain}`}
                className={classes.link}
            >
                <Paper elevation={3} className={classes.paper}>
                    {children}
                </Paper>
            </MaterialLink>
        </div>
    );
}