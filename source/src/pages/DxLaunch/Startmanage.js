import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Fab } from '@material-ui/core';
import Disclaimer from '../../component/DisclaimerComponent/Disclaimer';
import { ConnectHeaderThree } from '../../component/ConnectHeaderComponent/ConnectHeaderThree';
import { ConnectHeaderTwo } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo';
import { CustomSubCardTitle } from '../../component/CardConstructComponent/CustomSubCardTitle';
import StartStepper from '../../component/CardConstructComponent/StartStepper';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    Container: {
        padding: '7px'
    },
    Card: {
        margin: '8px',
        padding: '24px'
    },
    CardSmall: {
        margin: '8px',
        padding: '15px'
    },
    Fab: {
        '& .MuiFab-extended.MuiFab-sizeMedium': {
            fontSize: '.875em',
            fontWeight: 600,
            lineHeight: 1.75,
            width: '64px',
        },
        margin: '30px 5px 5px'
    },
    await: {
        background: '#fafafa',
        padding: "2px 0px 2px 16px",
        borderRadius: '8px',
        lineHeight: '1.5'
    },
    currentFees: {
        textAlign: 'center',
        fontSize: '80%',
    }
}));

export const Startmanage = () => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState('true');

    const { account, status, connect, reset, networkName, balance } = useWallet();
    console.log(useWallet());

    //connect Wallet function
    useEffect(() => {
        if (status === "connected") {
            reset();
            console.log("already connect");
        }
        if (!account) {
            if (status === "disconnected") {
                connect();
            } else {
                reset();
            }
        } else {
            console.log("****************");
        }
    }, [account])
    const connectWallet = () => {
        connect('injected');
    }

    const modalShowHandle = (value) => {
        setModalOpen(value)
    }
    const modalShow = () => {
        setModalOpen(true)
    }
    const confirmHandle = (status) => {
        setConfirm(status);
    }

    let startManage;
    let header;
    let bodyContent;
    let stepperContent;

    if (account) {
        header = (
            <ConnectHeaderTwo networkName={networkName} unit="ETH" wallet={account} balance={balance} />
        )
        bodyContent = (
            <div>
                <p>
                    Disclaimer: This process is entirely decentralized, we cannot be held reponsible for incorrect entry of information or be held liable for anything related to your use of our platform. Please ensure you enter all your details to the best accuracy possible and that you are in compliance with your local laws and regulations.
                </p>
                <p>This is a beta version! We cannot guarantee there will be no bugs.Use at your own risk!</p>
                <p className={'textRed'}>
                    For tokens with burns, rebase or other special transfers please ensure you have a way to whitelist multiple addresses or turn off the special transfer events(By setting fees to 0 for example for the duration of the presale)
                </p>
            </div>
        )
        stepperContent = (
            <StartStepper />
        )
    } else {
        header = (
            <ConnectHeaderThree connectWallet={connectWallet} />
        )
        bodyContent = (
            <p>Awaiting Wallet Connection...</p>
        )
        stepperContent = (
            <div></div>
        )
    }

    if (confirm == 'true') {
        startManage = (
            <Container className={classes.Container}>
                <Card className={classes.Card}>
                    <p className={'mg0'}>Disclaimer not accepted. Please accept the disclaimer to continue!</p>
                    <Fab variant="extended" color="primary" onClick={modalShow} size="medium" className={classes.Fab}>
                        OPEN DISCLAIMER
                    </Fab>
                </Card>
                <Disclaimer confirmHandle={confirmHandle} showStatus={modalOpen} modalShowHandle={modalShowHandle} />
            </Container>
        )
    } else {
        startManage = (
            <Container className={classes.Container}>
                {header}
                <br />
                <Card className={classes.Card}>
                    <CustomSubCardTitle headerTitle="Create Presale" headerTitle1="Get started in just a few simple steps!" />
                    <div className={classes.await}>
                        {bodyContent}
                    </div>
                </Card>
                <br />
                <Card className={classes.CardSmall}>
                    <div className={classes.currentFees}>
                        <span>Current Fees: 0.1 + 2% of Tokens Sold + 2% of Raised</span>
                    </div>
                </Card>
                <br />
                {stepperContent}
                <br />
            </Container>
        )
    }
    return (
        <React.Fragment>
            {startManage}
        </React.Fragment>
    );
}