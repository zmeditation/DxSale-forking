import React, { useState } from 'react';
import { makeStyles, FormControl, InputLabel, Select } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    formSelect: {
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
        },
        width: '100%'
    }
}));
export const CustomSelect = (props) => {
    const { selectValue, handleSelect, children } = props;
    const handleChangeForm = (event) => {
        handleSelect(event.target.value);
    };
    const { label } = props;
    const classes = useStyles();
    return (
        <FormControl variant="filled" className={classes.formSelect}>
            <InputLabel className={'fs13px'} htmlFor="filled-age-native-simple">{label}</InputLabel>
            <Select
                native
                value={selectValue}
                onChange={handleChangeForm}
                inputProps={{
                    name: 'tokenType',
                    id: 'filled-age-native-simple',
                }}
            >
                {children}
            </Select>
        </FormControl>
    );
}