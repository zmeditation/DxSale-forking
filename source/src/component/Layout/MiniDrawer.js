import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { staticMenu } from '../../static/Menus';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemLinkContainer from '../../container/ListItemLinkContainer';
import { useStyles } from '../../static/MiniDrawerStyles';
import HouseIcon from '@material-ui/icons/House';
import CropFreeIcon from '@material-ui/icons/CropFree';
import TelegramIcon from '@material-ui/icons/Telegram';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useHistory } from 'react-router-dom';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const { openSideBar, handlerSideBar } = props;

    const fullScreen = () => {
        window.document.documentElement.requestFullscreen.call(window.document.documentElement);
    }

    const titleHandle = () => {
        history.push('/app/v2_9/DxMint');
    }

    const titleAvatarHandle = () => {
        history.push('/');
    }

    const [scroll, setScroll] = useState(true);
    window.onscroll = () => {
        if (window.scrollY > 10) {
            setScroll(false);
        } else {
            setScroll(true);
        }
    }
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openSideBar,
                    [classes.boxShadow]: !scroll,
                })}>
                <Toolbar className={classes.header}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handlerSideBar}
                        edge="start"
                        className={clsx({
                            [classes.menuButton]: openSideBar,
                            [classes.openMenuButton]: !openSideBar,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={clsx(classes.Icons, { [classes.ophidden]: !scroll })}>
                        <IconButton onClick={fullScreen} size="medium">
                            <CropFreeIcon fontSize="medium" />
                        </IconButton>
                        <IconButton size="medium">
                            <HouseIcon fontSize="medium" />
                        </IconButton>
                        <IconButton size="medium">
                            <TelegramIcon fontSize="large" />
                        </IconButton>
                        <IconButton size="medium">
                            <CollectionsBookmarkIcon fontSize="medium" />
                        </IconButton>
                    </div>
                    <p className={clsx({ [classes.TitleUnscroll]: scroll, [classes.TitleScroll]: !scroll })}>DxSale</p>
                    <a href="https://www.coingecko.com/en/coins/dxsale-network" target="_blank" className={classes.logoIcon}>
                        <img src={window.location.origin + '/images/dx-logo.png'} style={{ width: '25px' }} />
                        <p className={'fs8'}>
                            $1.620
                        </p>
                    </a>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openSideBar,
                    [classes.drawerClose]: !openSideBar,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openSideBar,
                        [classes.drawerClose]: !openSideBar,
                    }),
                }}
                open={openSideBar}
            >
                <div onClick={titleHandle} className={clsx(classes.title, { [classes.visible]: !openSideBar })}>
                    <p>DxSale Beta v2.9</p>
                </div>
                <nav className={clsx(classes.lists, { [classes.overHidden]: !openSideBar })}>
                    <div onClick={titleAvatarHandle} className={classes.titleAvatar}>
                        <img className={classes.titleAvatarImg} src={window.location.origin + '/images/dx-logo.png'}></img>
                    </div>

                    <List className={classes.sideBarList}>
                        {staticMenu.map((menu, index) => (
                            <React.Fragment key={index}>
                                <ListItemLinkContainer menuObj={menu} />
                            </React.Fragment>
                        ))}
                    </List>
                </nav>
            </Drawer>
        </React.Fragment >
    );
}

export default MiniDrawer;
