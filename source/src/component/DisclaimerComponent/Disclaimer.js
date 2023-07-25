
import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import CheckboxGroup from '../CheckboxGroup';
import { Grid, Fab, Modal, } from '@material-ui/core';

const paper = {
    backgroundColor: 'white',
    padding: "25px",
    margin: "20px 10px 20px 10px",
    borderRadius: '10px',
}

const modalStyle = {
    overflow: 'scroll'
}

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: [
                {
                    label: 'I have tested my token with the DxSale app on a test network. (Ex. Ropsten)',
                    value: 'shawshankRedemption',
                    checked: false,
                },
                {
                    label: 'My token has a function to disable special transfers or has no special transfers',
                    value: 'theGodfather',
                    checked: false,
                },
                {
                    label: 'My token is not already listed on undefined and I have not given out any tokens to users',
                    value: 'theDarkKnight',
                    checked: false,
                },
                {
                    label: 'I understand tokens deposited to the SALE contract are non-recoverable (Regardless of success or failure)',
                    value: 'savingPrivateRyan',
                    checked: false,
                },
                {
                    label: 'I understand fees paid to launch a SALE are non-recoverable',
                    value: 'schindlersList',
                    checked: false,
                },
                {
                    label: 'I understand that I have to finalize my sale within 48 hours of hitting the hardcap!',
                    value: 'schindlersList',
                    checked: false,
                },
                {
                    label: 'I am using DxSale as a software tool only and am alone responsible for anything I create on it',
                    value: 'schindlersList',
                    checked: false,
                },
                {
                    label: 'I understand that I am responsible for following my local laws and regulations including KYC and AML practices.',
                    value: 'schindlersList',
                    checked: false,
                },
                {
                    label: 'I have read and agree to the terms and conditions',
                    value: 'schindlersList',
                    checked: false,
                },
            ]
        };
    }

    modalClose = () => {
        const { modalShowHandle } = this.props;
        modalShowHandle(false);
        const { checkboxes } = this.state;
        for (let i = 0; i < checkboxes.length; i += 1) {
            checkboxes[i].checked = false;
        }
    }

    handleCheckboxgroupChange = (updatedUsecaseCBState, selectAll) => {
        this.setState({
            checkboxes: updatedUsecaseCBState,
        });
    };

    confirmHandleModal = () => {
        const { confirmHandle, modalShowHandle } = this.props;
        modalShowHandle(false);
        confirmHandle('false');
    };

    render() {
        const { checkboxes } = this.state;
        let allChecked = true;
        for (let i = 0; i < checkboxes.length; i += 1) {
            if (checkboxes[i].checked == true) {
                allChecked = false;
            } else {
                allChecked = true;
                break;
            }
        }
        return (
            <Modal
                open={this.props.showStatus}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={modalStyle}
            >
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div style={paper}>
                            <span className={'fs1em'}>
                                Disclaimer
                            </span>
                            <Divider className={'mt2 mb2'} />
                            <span className={'fs1em'}>Please read the <a href="/app/termsandconditions" className={'link'}>Terms and Conditions</a> then agree to all the following to proceed!
                            </span>
                            <CheckboxGroup
                                checkboxes={checkboxes}
                                onCheckboxGroupChange={this.handleCheckboxgroupChange}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Fab onClick={this.modalClose} variant="extended" size="medium">
                                            CANCEL
                                        </Fab>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Fab variant="extended" onClick={this.confirmHandleModal} disabled={allChecked} color="primary" size="medium">
                                            CONFIRM
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Modal>
        );
    }
}

export default Disclaimer;