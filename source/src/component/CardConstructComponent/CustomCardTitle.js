import React from "react";
import { makeStyles } from "@material-ui/core";
import FilterFramesIcon from '@material-ui/icons/FilterFrames';

const useStyles = makeStyles(theme => ({
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
    img: {
        height: '55px',
        width: '55px',
        marginRight: '10px',
        marginBottom: ' 5px',
    },
}));

export const CustomCardTitle = (props) => {
    const classes = useStyles();
    const { headerIcon, headerTitle, iconUrl } = props;
    let avatar;
    if (headerIcon == 1) {
        avatar = (
            <span className={classes.headerIcon}>
                <FilterFramesIcon className={classes.Icon} />
            </span>
        );
    } else {
        avatar = (
            <img className={classes.img} src={`${window.location.origin}${iconUrl}`}></img>
        );
    }
    return (
        <div className={classes.header}>
            {avatar}
            <p className={classes.headerTitle}>{headerTitle}</p>
        </div>
    );
}