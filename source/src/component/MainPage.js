import React, { useState } from 'react';
import MiniDrawerContainer from '../container/MiniDrawerContainer';
import { Routing } from './Routing';
import { useStyles } from '../static/MiniDrawerStyles';
import networkInfo from '../Info/rpc.json';
import Web3 from 'web3';
import { UseWalletProvider } from 'use-wallet';

function MainPage(props) {
    const classes = useStyles;
    const { openSideBar, toggleHandler } = props;

    const web3 = new Web3(window.ethereum);

    let initChainId = parseInt(web3.currentProvider.chainId, 16);
    let localChainId = parseInt(localStorage.getItem("chainId"));

    if (localChainId == null || isNaN(localChainId)) {
        localChainId = initChainId;
        localStorage.setItem("chainId", initChainId);
    }

    let [chainId, setID] = useState(localChainId);

    window.ethereum.on('chainChanged', (chainId) => {
        localStorage.setItem("chainId", chainId);
        setID(chainId);
    });
    // window.ethereum.on('networkChanged', (networkId) => {
    //     localStorage.setItem("chainId", networkId);
    //     setID(networkId);
    // });

    let rpcUrl;
    networkInfo.forEach(network => {
        if (network.chainId == chainId) {
            rpcUrl = network.rpc;
        }
    });

    return (
        <div className={classes.root}>
            <MiniDrawerContainer openSideBar={openSideBar} sideBarClick={toggleHandler} />
            <UseWalletProvider
                chainId={parseInt(chainId)}
                connectors={{
                    walletconnect: { rpcUrl: rpcUrl },
                }}
            >
                <Routing openSideBar={openSideBar} sideBarClick={toggleHandler} />
            </UseWalletProvider>
        </div >
    );
}

export default MainPage;