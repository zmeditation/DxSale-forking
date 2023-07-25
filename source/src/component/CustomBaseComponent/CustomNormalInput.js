import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        '& .MuiInputBase-input': {
            padding: '10px',
            border: '1px solid rgba(0,0,0,0.32)',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white',
        },
        '& .MuiInput-underline': {
            borderRadius: '8px',
            width: '100%',
        },
        '& .MuiInput-underline:before': {
            content: 'none',
        },
        '& .MuiInput-underline:after': {
            content: 'none',
        }
    }
}));

export default function CustomNormalInput(props) {
    const classes = useStyles();
    const { placeholder, disabled } = props;
    return (
        <div className={classes.input}>
            <Input placeholder={placeholder} disabled={(disabled == 'true' ? true : false)} inputProps={{ 'name': 'description' }} />
        </div>
    );
}