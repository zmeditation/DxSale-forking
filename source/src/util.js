import networkInfo from './Info/rpc.json';

export function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
        return null;
    } else {
        return accounts[0];
    }
}

function dec2hexString(dec) {
    return '0x' + (dec).toString(16);
}

export function switchNetwork(chainId_) {
    let rpcUrl;
    networkInfo.forEach(network => {
        if (network.chainId == chainId_) {
            rpcUrl = network.rpc;
        }
    });
    let chainId = dec2hexString(chainId_);
    try {
        window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `${chainId}` }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (window.ethereum.error.code === 4902) {
            try {
                window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{ chainId: `${chainId}`, rpcUrl: { rpcUrl } }],
                });
            } catch (addError) {
                // handle "add" error
            }
        }
        // handle other "switch" errors
    }
}
