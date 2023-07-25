import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    CustomInput: {
        '& .MuiFilledInput-input': {
            padding: '23px 12px 3px',
            border: '1px solid rgba(0,0,0,0.32)',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white',
        },
        '& .MuiFilledInput-root': {
            borderRadius: '8px',
        },
        '& .MuiFilledInput-underline:before': {
            content: 'none',
        },
        '& .MuiFilledInput-underline:after': {
            content: 'none',
        }
    }
}));

export const CustomInput = (props) => {
    const { placeholder, label, inputValueHandle, name } = props;
    const classes = useStyles();
    const valueHandle = (event) => {
        inputValueHandle(event.target.name, event.target.value);
    }
    return (
        < TextField
            className={classes.CustomInput}
            label={label}
            name={name}
            placeholder={placeholder}
            onChange={valueHandle}
            fullWidth
            margin="normal"
            variant="filled"
        />
    );
}