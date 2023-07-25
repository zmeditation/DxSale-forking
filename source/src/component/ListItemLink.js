import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PropTypes } from 'prop-types';
import { Link as RouterLink, useHistory } from 'react-router-dom';

function ListItemLink(props) {
    const history = useHistory();
    let { to, open, menu, menuText, icon, ...other } = props;
    const linkUrl = url => () => {
        if (url != undefined) {
            history.push(url);
        } else {
        }
    }
    let list;
    if (to == "subtitle") {
        list = (
            <ListItem disabled>
                <ListItemIcon></ListItemIcon>
                <ListItemText >
                    <p className={'textGreen fs10px fwbold'}>{menuText}</p>
                </ListItemText>
            </ListItem>
        )
    } else {
        list = (
            <ListItem button onClick={linkUrl(to)} {...other} >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={menuText} />
                {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
        )
    }
    return (
        <div>
            {list}
        </div>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
};

export default ListItemLink;

