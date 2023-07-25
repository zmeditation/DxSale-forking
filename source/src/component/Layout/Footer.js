import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    Footer: {
        textAlign: 'center',
    },
    img: {
        width: '50px',
        height: '50px',
    },
    link: {
        marginLeft: '10px',
        textAlign: 'left',
        lineHeight: 1.5
    },
    a: {
        color: 'black',
        fontSize: '80%',
        marginTop: '4px',
        cursor: 'pointer',
    },
    hr: {
        margin: '15px'
    },
    content: {
        margin: '5px 0px 15px 0px',
        display: 'inline-flex'
    }
}));
export const Footer = () => {
    const classes = useStyles();
    const history = useHistory();
    const privacyLink = () => {
        history.push('/app/privacypolicy');
    }
    const termLink = () => {
        history.push('/app/termsandconditions');
    }
    return (
        <div className={classes.Footer}>
            <hr className={classes.hr} />
            <div className={classes.content}>
                <img src={window.location.origin + '/images/dx-logo.png'} className={classes.img} />
                <div className={classes.link}>
                    <div onClick={termLink} className={classes.a}>Terms And Conditions</div>
                    <div onClick={privacyLink} className={classes.a}>Privacy Policy</div>
                </div>
            </div>
        </div>);
}