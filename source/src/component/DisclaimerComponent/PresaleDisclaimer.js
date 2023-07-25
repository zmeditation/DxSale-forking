
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fab, Modal, FormControlLabel, Divider, Checkbox } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        color: 'blue[600]',
        '&$checked': {
            color: 'blue[500]',
        },
    },
    checked: {},
    paper: {
        backgroundColor: 'white',
        padding: "25px",
        margin: "20px 10px 20px 10px",
        borderRadius: '10px',
        textAlign: 'center',
    },
    content: {
        textAlign: 'left',
    },
    modal: {
        overflow: 'scroll'
    }
}));

export const PresaleDisclaimer = (props) => {
    const classes = useStyle();
    const { showStatus, confirmHandle, modalShowHandle } = props;
    const [checked, setChecked] = React.useState(false);

    const confirmHandleModal = () => {
        confirmHandle(true);
        modalShowHandle(false);
    }
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    }
    const modalClose = () => {
        modalShowHandle(false);
    }
    return (
        <Modal
            open={showStatus}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
        >
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <div className={classes.paper}>
                        <span className={'fs1em'}>
                            Disclaimer
                        </span>
                        <Divider className={'mt2 mb2'} />
                        <div className={classes.content}>
                            <p className={'fs825em lh2'}>
                                DxSale is a decentralized software tool. Anyone can create a token sale using their own tokens.</p>
                            <p className={'fs825em lh2'}>
                                Tokens can be clones and can have the same name as existing coins. Token creators can pretend to be owners of the real project. Please use provided social links to research and examine every project to avoid scams.</p>
                            <p className={'fs825em lh2'}>
                                In the DeFi zone project owners can load arbitrary token contracts. Please take extra caution and do your research when interacting with arbitrary tokens. You might not be able to claim or sell your token!
                            </p>
                            <p className={'fs825em lh2'}>
                                Please pay close attention to all token metrics shared on the SALE's page.
                            </p>
                            <p className={'mt3 fs825em'}><a href="/app/termsandconditions" className={'link'}>Terms and Conditions</a></p>
                            <FormControlLabel
                                className={'textRed mt3'}
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        color="primary"
                                    />
                                }
                                label="I have read and agree to the Terms and Conditions and I understand that I am responsible for doing my own research!"
                            />
                        </div>
                        <div className={'mt3'}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Fab onClick={modalClose} variant="extended" size="medium">
                                        CANCEL
                                    </Fab>
                                </Grid>
                                <Grid item xs={6}>
                                    <Fab variant="extended" onClick={confirmHandleModal} disabled={!checked} color="primary" size="medium">
                                        CONFIRM
                                    </Fab>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Modal>
    );
}