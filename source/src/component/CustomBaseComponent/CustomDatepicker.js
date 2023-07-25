import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    DatetimePicker: {
        '& .MuiFormControl-root': {
            border: '1px solid rgba(0,0,0,0.32)',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white',
        },
        '& .MuiInputLabel-formControl': {
            top: '5px',
            left: '10px'
        },
        '& .MuiInput-underline': {
            borderRadius: '8px',
            width: '100%',
            paddingLeft: '10px',
        },
        '& .MuiInput-underline:before': {
            content: 'none',
        },
        '& .MuiInput-underline:after': {
            content: 'none',
        }
    }
}));

export default function CustomDatepicker(props) {
    // The first commit of Material-UI
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const { label } = props;
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.DatetimePicker}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                    <KeyboardDateTimePicker
                        id="time-picker"
                        label={label}
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}
