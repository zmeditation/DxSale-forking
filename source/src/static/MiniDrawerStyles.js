import { makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius: '8px',
        }
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    header: {
        paddingLeft: '0px!important',
        position: 'relative',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: "none",
        backgroundAttachment: 'fixed',
        backgroundImage: 'linear-gradient(-45deg, #7C4DFF 0%, #7C4DFF 33%, #00C853 100%)!important',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    boxShadow: {
        boxShadow: '0px 1px 8px 0px rgb(80 80 80 / 20%), 0px 3px 4px 0px rgb(80 80 80 / 14%), 0px 3px 3px -2px rgb(80 80 80 / 12%)'
    },
    logoIcon: {
        color: 'white',
        textDecoration: 'none',
        display: 'contents',
        marginLeft: '10px',
    },
    Icons: {
        marginRight: '30px',
        marginLeft: '20px',
        width: '210px',
        '& .MuiIconButton-root': {
            color: 'white'
        },
        '& svg': {
            fontSize: '28px',
        },
    },
    TitleScroll: {
        left: '60px',
        top: '-7px',
        position: 'absolute',
        opacity: '0.87',
        color: '#fff',
        fontSize: '24px',
        transition: 'all 0.3s ease',
        fontWeight: 700,
        textTransform: 'capitalize',
        marginLeft: '20px',
    },
    TitleUnscroll: {
        left: '60px',
        top: '60px',
        position: 'absolute',
        opacity: '0.87',
        color: '#fff',
        fontSize: '24px',
        transition: 'all 0.3s ease',
        fontWeight: 700,
        textTransform: 'capitalize',
        opacity: 0,
        marginLeft: '20px',
    },
    menuButton: {
        marginLeft: '-20px',
        boxShadow: '0 2px 40px -5px #7c4dff',
        backgroundColor: '#EDE7F6',
        width: '40px',
        height: '40px',
        color: '#7C4DFF',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            backgroundColor: '#EDE7F6',
        },
    },
    openMenuButton: {
        marginLeft: '17px',
        backgroundColor: 'transparent',
        width: '40px',
        height: '40px',
        color: 'white',
        transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,background 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    ophidden: {
        opacity: 0
    },
    hide: {
        display: 'none',
    },
    visible: {
        visibility: 'hidden'
    },
    overHidden: {
        overflow: 'hidden!important'
    },
    sideBarList: {
        paddingLeft: '8px',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        '& .MuiDrawer-paper': {
            overflow: 'unset',
        }
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        color: 'rgba(0, 0, 0, 0.87)',
        // backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        '&:hover': {
            width: '240px',
            transition: 'width .2s',
        }
    },
    toolbar: {
        position: 'absolute',
        left: '229px',
        top: '11px',
        ...theme.mixins.toolbar,
        '& .MuiIconButton-root:hover': {
            backgroundColor: '#EDE7F6!important'
        }
    },
    title: {
        padding: '10px 10px 0px 10px',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    titleAvatar: {
        margin: '0px auto',
        cursor: 'pointer',
    },
    titleAvatarImg: {
        width: '45%',
    },
    content: {
        flexGrow: 1,
        marginTop: '63px',
        marginLeft: '63px'
        // display: 'block',
    },
    contentShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    lists: {
        marginTop: theme.spacing(1),
        overflow: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    breadCrumbBar: {
        display: 'flex',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    breadCrumbBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
        padding: theme.spacing(1, 2),

    }
}));