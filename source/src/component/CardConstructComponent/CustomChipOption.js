import React from 'react';
import { makeStyles, Grid, Chip } from '@material-ui/core';
// import { PlayCircleOutlineIcon, CheckCircleOutlineIcon, HighlightOff, AccessTime } from '@material-ui/icons';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        fontWeight: 'bold',
        fontSize: '10px!important',
        border: 'none!important',
    },
    subchip: {
        fontWeight: 'bold',
        fontSize: '10px!important',
        border: 'none!important',
    },
    body: {
        textAlign: 'center',
        marginTop: '20px',
    },
    subbody: {
        marginTop: '20px'
    }
}));

export const CustomChipOption = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClickActive = () => {
        setState(1);
    };

    const handleClickSuccess = () => {
        setState(2);
    };

    const handleClickFailed = () => {
        setState(3);
    };

    const handleClickLive = () => {
    };

    const handleClickPending = () => {
    };

    let subChipOption;

    if (state == 1) {
        subChipOption = (
            <div className={classes.subbody}>
                <Grid container>
                    <Grid item xs={6}>
                        <Chip
                            label="LIVE"
                            onClick={handleClickLive}
                            onDelete={handleDelete}
                            deleteIcon={<PlayCircleOutlineIcon />}
                            variant="outlined"
                            size="small"
                            className={classes.subchip}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Chip
                            label="PENDING"
                            onClick={handleClickPending}
                            onDelete={handleDelete}
                            deleteIcon={<CheckCircleOutline />}
                            variant="outlined"
                            size="small"
                            className={classes.subchip}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    } else {
        subChipOption = (<div></div>)
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={4} />
                <Grid item xs={4} className={classes.body}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Chip
                                label="ACTIVE"
                                onClick={handleClickActive}
                                onDelete={handleDelete}
                                deleteIcon={<PlayCircleOutlineIcon />}
                                variant="outlined"
                                size="small"
                                className={classes.chip}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip
                                label="SUCCESS"
                                onClick={handleClickSuccess}
                                onDelete={handleDelete}
                                deleteIcon={<CheckCircleOutline />}
                                variant="outlined"
                                size="small"
                                className={classes.chip}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip
                                label="FAILED"
                                onClick={handleClickFailed}
                                onDelete={handleDelete}
                                deleteIcon={<HighlightOff />}
                                variant="outlined"
                                size="small"
                                className={classes.chip}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    {subChipOption}
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </div>
    );
}