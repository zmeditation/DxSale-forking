import React, { useEffect } from 'react';
import { Card, Container, IconButton, Tooltip, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ConnectHeaderFour } from '../../component/ConnectHeaderComponent/ConnectHeaderFour';
import { ConnectHeaderTwo_Offline } from '../../component/ConnectHeaderComponent/ConnectHeaderTwo_Offline';
import { CustomCardTitle } from '../../component/CardConstructComponent/CustomCardTitle';
import { CustomSearch } from '../../component/CustomBaseComponent/CustomSearch';
import { CustomChipOption } from '../../component/CardConstructComponent/CustomChipOption';
import { CustomPaginate } from '../../component/CardConstructComponent/CustomPaginate';
import { NoPresale } from '../../component/CardConstructComponent/Nopresale';
import { CustomContract } from '../../component/LockComponent/CustomContract';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles(theme => ({
    Container: {
        padding: '7px'
    },
    ConnectHeader: {
        marginBottom: '22px',
    },
    Card: {
        margin: '8px',
        padding: '24px'
    },
    linkbtn: {
        borderRadius: "25px",
    },
    iconSet: {
        padding: '8px 0px 0px 10px',
    },
    contractItem: {
        textAlign: 'center',
        padding: '7px'
    },
    Contract: {
        marginTop: '30px'
    }
}));
export const Launchdashboard = () => {
    const classes = useStyles();

    const { account, connect, reset, status } = useWallet();
    useEffect(() => {
        if (!account) {
            if (status === "disconnected") {
                connect();
            } else {
                reset();
            }
        }
    }, [account])

    const connectWallet = () => {
        connect('injected');
    }

    let connectHeader;
    let customContract;

    if (!account) {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderFour connectWallet={connectWallet} />
            </div>
        )
        customContract = (
            <NoPresale />
        )
    } else {
        connectHeader = (
            <div className={classes.ConnectHeader}>
                <ConnectHeaderTwo_Offline />
            </div>
        )
        customContract = (
            <div className={classes.Contract}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={classes.contractItem}>
                            <CustomContract version="launch" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                {connectHeader}
                <div>
                    <Card className={classes.Card}>
                        <CustomCardTitle iconUrl="/images/card/dx-launch.png" headerIcon="0" headerTitle="The First Cross Chain Decentralized Launchpad" />
                        <div>
                            <CustomSearch>
                                <div className={classes.iconSet}>
                                    <Tooltip title="DxSale is a completely decentralized platform. Anyone can create a presale. The only thing our launchpad guarantees is that the details stated on the presale page are accurate and that all presales will follow with a Uniswap listing and instant locking of Liquidity. Please ensure you read details of the presale extremely carefully!" placement="bottom">
                                        <IconButton aria-label="delete" className={'mr10'} size="small">
                                            <ErrorOutlineIcon color="primary" />
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton aria-label="delete" className={'mr10'} disabled size="small">
                                        <DehazeIcon color="primary" />
                                    </IconButton>
                                </div>
                            </CustomSearch>
                        </div>
                        <div>
                            <CustomChipOption />
                        </div>
                    </Card>
                </div>
                <div>
                    {customContract}
                </div>
                <div>
                    <CustomPaginate />
                </div>
            </Container>
        </React.Fragment>
    );
}
