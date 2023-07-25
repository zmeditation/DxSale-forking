import React from 'react';
import { makeStyles, Fab, InputBase, IconButton, Grid, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        margin: '5px',
        fontSize: '70%!important',
        height: '35px!important',
        width: '180px!important'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width: '100%',
        border: '1px solid rgba(0,0,0,0.32)',
        paddingLeft: '10px',
        fontSize: '.875rem',
        borderRadius: '8px',
        height: '40px',
    },
    iconButton: {
        padding: 10,
        color: '#7C4DFF',
    },
    searchBox: {
        display: 'flex!important',
    }
}));
export const CustomSearch = (props) => {
    const classes = useStyles();
    const { children } = props;
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <Tooltip title="Create your own sale or manage your already existing sale!" placement="bottom">
                        <Fab variant="extended" href="/" color="primary" size="medium" className={classes.Fab}>
                            START OR MANAGE SALE
                        </Fab>
                    </Tooltip>
                </Grid>
                <Grid item xs={7} className={classes.searchBox}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search by token address (Ex. 0x97bb08ba41f033beaac315169fc566ac9e0daf52)"
                        inputProps={{ 'aria-label': 'Search by token address (Ex. 0x97bb08ba41f033beaac315169fc566ac9e0daf52)' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
}