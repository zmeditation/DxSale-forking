import React from "react";
import { makeStyles } from "@material-ui/core";
import FilterFramesIcon from '@material-ui/icons/FilterFrames';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
    },
    headerTitle: {
        flex: 1,
        textAlign: 'left',
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
    p1: {
        color: 'blue',
        fontSize: '100%',
    },
    p2: {
        fontSize: '100%',
    },
}));

export const CustomSubCardTitle = (props) => {
    const classes = useStyles();
    const { headerTitle, headerTitle1 } = props;
    return (
        <div className={classes.header}>
            <span className={classes.headerIcon}>
                <FilterFramesIcon className={classes.Icon} />
            </span>
            <div className={classes.headerTitle}>
                <p className={classes.p1}>{headerTitle}</p>
                <p className={classes.p2}>{headerTitle1}</p>
            </div>
        </div>
    );
}