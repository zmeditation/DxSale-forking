import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Tabs,
  Tab,
  Grid,
  Fab,
  Divider,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ConnectHeaderOne } from "../component/ConnectHeaderComponent/ConnectHeaderOne";
import { ConnectHeaderTwo } from "../component/ConnectHeaderComponent/ConnectHeaderTwo";
import { Form } from "react-final-form";
import { CustomInput } from "../component/CustomBaseComponent/CustomInput";
import { CustomSelect } from "../component/CustomBaseComponent/CustomSelect";
import { CustomCardTitle } from "../component/CardConstructComponent/CustomCardTitle";
import CustomTabPanel from "../component/CardConstructComponent/CustomTabPanel";
import { useWallet } from "use-wallet";
import standardByteInfo from "../contract/standard_byteCode.json";
import standardAbi from "../contract/standard_abi.json";
import liquidityByteInfo from "../contract/liquidity_byteCode.json";
import liquidityAbi from "../contract/liquidity_abi.json";
import CustomNormalInput from "../component/CustomBaseComponent/CustomNormalInput";
import Web3 from "web3";
import dxsaleAbi from "../contract/dxsale_abi.json";
import { TokenType, DxSaleSCAddress } from "../constants";
import BigNumber from "bignumber.js";

const useStyles = makeStyles((theme) => ({
  Container: {
    padding: "7px",
  },
  ConnectHeader: {
    marginBottom: "22px",
  },
  Card: {
    margin: "8px",
    padding: "24px",
  },
  tabs: {
    "& button": {
      fontWeight: 600,
      fontSize: ".875rem",
    },
    "& .MuiTabs-indicator": {
      height: "4px",
      borderRadius: "10px 10px 0 0",
    },
  },
  tabContent: {
    textAlign: "center",
  },
  tabContentOther: {
    display: "inline-block",
    width: "30%",
    marginTop: "40px",
  },
  formCard: {
    marginTop: "40px",
    boxShadow: "0 5px 57px #98989d7a",
    padding: "20px",
  },
  formText: {
    textAlign: "left",
  },
  FabGreen: {
    "& .MuiFab-extended.MuiFab-sizeMedium": {
      fontSize: ".875em",
      fontWeight: 600,
      lineHeight: 1.75,
      width: "64px",
    },
    color: "white",
    backgroundColor: "#00C853",
    "&:hover": {
      backgroundColor: "green",
    },
    margin: "5px",
  },
  tokenCard: {
    margin: "20px 7px 0px 7px",
    boxShadow: "0 5px 26px #98989d7a",
    padding: "20px",
    textAlign: "left",
    wordWrap: "break-word",
  },
  tokenCard: {
    margin: "20px 7px 0px 7px",
    boxShadow: "0 5px 26px #98989d7a",
    padding: "20px",
    textAlign: "left",
    wordWrap: "break-word",
  },
  progress: {
    padding: "15px 15px 0px 15px",
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
    background: "rgba(58,58,58,.9)",
    transition: "opacity .3s,transform .3s,-webkit-transform .3s",
    color: "white",
    textAlign: "center",
    borderRadius: "8px",
  },
  CircularProgress: {
    color: "white",
  },
}));

export const DxMint = () => {
  const web3 = new Web3(window.ethereum);

  const classes = useStyles();
  const theme = useTheme();

  const { account, status, connect, reset, networkName, balance, chainId } =
    useWallet();

  const [loading, setLoading] = React.useState(false);

  const initState = {
    tokenName: "",
    tokenSymbol: "",
    tokenDecimal: 0,
    tokenSupply: 0,
    taxFee: 0,
    liquidityFee: 0,
  };

  const TabIndex = {
    CreateToken: 0,
    ManageToken: 1,
  };

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
        localStorage.removeItem("chainId");
        reset();
      }
    } else {
      const dxSaleSC = new web3.eth.Contract(
        dxsaleAbi,
        DxSaleSCAddress[chainId]
      );
      dxSaleSC.methods
        .getStandardTokenList(account)
        .call()
        .then((data) => {
          setStandardTokenList(data);
        });
    }
  }, [account]);

  const connectWallet = () => {
    connect("injected");
  };

  const [standardTokenList, setStandardTokenList] = React.useState([]);

  //Tab value state
  const [tabIndex, setTabIndex] = React.useState(TabIndex.CreateToken);
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const [tokenType, setTokenType] = React.useState(TokenType.StandardToken);
  const [formState, setFormState] = React.useState(initState);

  const handleSelect = (newValue) => {
    setTokenType(newValue);
  };

  const createTokens = () => {
    if (formState.tokenDecimal < 5 || formState.tokenDecimal > 18) {
      alert("Decimal value should be between 5 and 18.");
      return;
    }
    if (
      formState.tokenSupply < 1 ||
      formState.tokenSupply.toString().length > 12
    ) {
      alert(
        "Total supply must be less than 10 Trillion tokens and more than 1 token"
      );
      return;
    }
    setLoading(true);
    if (account) {
      if (tokenType == TokenType.StandardToken) {
        const dxSaleSC = new web3.eth.Contract(
          dxsaleAbi,
          DxSaleSCAddress[chainId]
        );

        dxSaleSC.methods
          .createStandardToken(
            formState.tokenName,
            formState.tokenSymbol,
            formState.tokenDecimal,
            new BigNumber(formState.tokenSupply)
              .multipliedBy(new BigNumber(10).pow(formState.tokenDecimal))
              .toString(10)
          )
          .send({
            from: account,
            value: web3.utils.toWei("0.01", "ether"),
            chainId: chainId,
          })
          .on("error", (error) => {
            setLoading(false);
          })
          .then(() => {
            setLoading(false);
            console.log(DxSaleSCAddress[chainId]);
            dxSaleSC.methods
              .getStandardTokenList(account)
              .call()
              .then((data) => {
                setStandardTokenList(data);
                console.log(data);
              });
            setTabIndex(TabIndex.ManageToken);
          });
      } else if (tokenType == TokenType.LiquidityToken) {
        const bytecode = "0x" + liquidityByteInfo.object;
        const contract = new web3.eth.Contract(liquidityAbi, "", {
          data: bytecode,
        });
        contract
          .deploy({
            arguments: [
              "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
              formState.tokenName,
              formState.tokenSymbol,
              formState.tokenDecimal,
              formState.tokenSupply,
              formState.taxFee,
              formState.liquidityFee,
            ],
          })
          .send({
            from: account,
            gasPrice: "0x09184e72a000",
            gasLimit: "0x5710",
            value: "0x00",
          })
          .on("error", (error) => {
            setLoading(false);
          })
          .then(() => {
            setLoading(false);
          });
      }
    } else {
      console.log("Please connect Metamask");
    }
  };

  const getInputValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  let tokenTypeContent;
  let formContent;

  if (tokenType == TokenType.StandardToken) {
    tokenTypeContent = (
      <div>
        <div className={classes.formText}>
          <p className={"fs8"}>
            <strong>Standard Token Features:</strong>
          </p>
          <p className={"fs8"}>- Basic token with all standard features</p>
          <p className={"fs8"}>
            - Perfect for utility based projects such as charting tools
          </p>
          <p className={"fs8"}>
            - Get a ✅ DxMint Verified badge when used with our launchpad
          </p>
        </div>
        <div className={"mt3 mb3 fs8"}>
          <p>Standard Token Minting Fees {100} ONE (Flat Rate)</p>
        </div>
      </div>
    );
    formContent = (
      <div>
        <CustomInput
          name="tokenName"
          label="Enter Token Name"
          placeholder="Ex.SafeMoon"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenSymbol"
          label="Enter Token Symbol"
          placeholder="Ex.SMOON"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenDecimal"
          label="Enter Token Decimal"
          placeholder="Ex.18"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenSupply"
          label="Enter Token Total Supply"
          placeholder="Ex.19000000"
          inputValueHandle={getInputValue}
        />
      </div>
    );
  } else if (tokenType == TokenType.LiquidityToken) {
    tokenTypeContent = (
      <div>
        <div className={classes.formText}>
          <p className={"fs8"}>
            <strong>Liquidity Generator Token Features:</strong>{" "}
            <span className={"textRed"}>(Beta)</span>
          </p>
          <p className={"fs8"}>
            - Auto yield and liquidity generation (Safemoon Fork)
          </p>
          <p className={"fs8"}>- Customize fees taken to reward holders</p>
          <p className={"fs8"}>- Customize fees to generate liquidty</p>
          <p className={"fs8"}>- Whitelist function</p>
          <p className={"fs8"}>
            - ✅ DxMint Verified badge when used with our launchpad
          </p>
        </div>
        <div className={"mt3 mb3 fs8"}>
          <p>Liquidity Generator Token Minting Fees {100} ONE (Flat Rate)</p>
        </div>
      </div>
    );
    formContent = (
      <div>
        <CustomInput
          name="tokenName"
          label="Enter Token Name"
          placeholder="Ex.SafeMoon"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenSymbol"
          label="Enter Token Symbol"
          placeholder="Ex.SMOON"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenDecimal"
          label="Enter Token Decimal"
          placeholder="Ex.18"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="tokenSupply"
          label="Enter Token Total Supply"
          placeholder="Ex.19000000"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="taxFee"
          label="Transaction fee in % to generate yield"
          placeholder="Ex.2"
          inputValueHandle={getInputValue}
        />
        <CustomInput
          name="liquidityFee"
          label="Transaction fee in % to generate liquidity"
          placeholder="Ex.3"
          inputValueHandle={getInputValue}
        />
      </div>
    );
  } else if (tokenType == 3) {
    tokenTypeContent = (
      <div>
        <div className={classes.formText}>
          <p className={"fs8"}>
            <strong>Frictionless Yield Token Features:</strong>
          </p>
          <p className={"fs8"}>- Standard token with automatic yield</p>
          <p className={"fs8"}>- Customize fees taken to reward holders</p>
          <p className={"fs8"}>- Whitelist function</p>
          <p className={"fs8"}>
            - ✅ DxMint Verified badge when used with our launchpad
          </p>
          <p className={"fs8 mt3 mb3"}>
            <strong>Coming Soon!</strong>
          </p>
        </div>
        <div className={"mt3 mb3 fs8"}>
          <p>Liquidity Generator Token Minting Fees {0.1} ONE (Flat Rate)</p>
        </div>
      </div>
    );
    formContent = (
      <div>
        <CustomInput label="Enter Token Name" placeholder="Ex.SafeMoon" />
        <CustomInput label="Enter Token Symbol" placeholder="Ex.SMOON" />
        <CustomInput label="Enter Token Decimal" placeholder="Ex.18" />
        <CustomInput
          label="Enter Token Total Supply"
          placeholder="Ex.19000000"
        />
        <CustomInput
          label="Transaction fee in % to generate yield (EX. 5)"
          placeholder="Ex.2"
        />
      </div>
    );
  }

  let connectHeader;
  let tokenGroup;

  if (!account) {
    connectHeader = (
      <div className={classes.ConnectHeader}>
        <ConnectHeaderOne connectWallet={connectWallet} />
      </div>
    );
    tokenGroup = <div></div>;
  } else {
    let ethBal = web3.utils.fromWei(balance, "ether");
    connectHeader = (
      <div className={classes.ConnectHeader}>
        <ConnectHeaderTwo
          networkName={networkName}
          unit="ETH"
          wallet={account}
          balance={ethBal}
        />
      </div>
    );
    if (tokenType == TokenType.StandardToken) {
      tokenGroup = (
        <div>
          <Grid container>
            {standardTokenList.map((standardToken) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.tokenCard}>
                  <p>
                    {standardToken["tokenName"]}(
                    <span className={"fwbold"}>
                      {standardToken["tokenSymbol"]}
                    </span>
                    )
                  </p>
                  <Divider />
                  <p className={"fs7"}>
                    Supply:{" "}
                    {new BigNumber(standardToken["totalSupply"])
                      .dividedBy(
                        new BigNumber(10).pow(standardToken["decimal"])
                      )
                      .toString()}
                  </p>
                  <p className={"fs7"}>Token Type: Standard</p>
                  <p className={"fs7"}>Token Address:</p>
                  <a
                    href="https://ropsten.etherscan.io/address/0xd6183994CA88F7F3A79385c0F01e4DAE6554b78a"
                    className={"fs7 link"}
                    target="_blank"
                  >
                    {standardToken["tokenAddress"]}
                  </a>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    } else if (tokenType == TokenType.LiquidityToken) {
      tokenGroup = (
        <div>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.tokenCard}>
                <p>
                  kkkkk(<span className={"fwbold"}>kkk</span>)
                </p>
                <Divider />
                <p className={"fs7"}>Supply: 2111111111112</p>
                <p className={"fs7"}>Token Type: Standard</p>
                <p className={"fs7"}>Token Address:</p>
                <a
                  href="https://ropsten.etherscan.io/address/0xd6183994CA88F7F3A79385c0F01e4DAE6554b78a"
                  className={"fs7 link"}
                  target="_blank"
                >
                  0xd6183994CA88F7F3A79385c0F01e4DAE6554b78a
                </a>
                <p className={"fs7"}>Holder Reward Fee: 0</p>
                <p className={"fs7"}>Liquidity Fee: 0</p>
                <Button size="small" color="primary">
                  ENABLE FEES
                </Button>
                <br />
                <p className={"mg0 fs8"}>
                  Enter an address below to add or remove it from whitelist! A
                  whitelisted address will not be charged fees!
                </p>
                <CustomNormalInput placeholder="Ex. 0xbA946ec9A05246Df754B14aE9058bc791D1711F0" />
                <Button size="small" color="primary">
                  ENABLE FEES
                </Button>
                <Button size="small" color="primary">
                  ENABLE FEES
                </Button>
                <p className={"fs7"}>
                  For instructions on code verification (such as on BSCScan)
                  click
                </p>
                <a
                  href="https://github.com/Dennis-DxSale/"
                  className={"fs7 link"}
                >
                  here!
                </a>
              </Card>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      <Container className={classes.Container}>
        {connectHeader}
        <div>
          <Card className={classes.Card}>
            <CustomCardTitle
              headerIcon="1"
              headerTitle="DxMint - Create Or Manage Your Own Token"
            />
            <div className={classes.content}>
              <Tabs
                value={tabIndex}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                className={classes.tabs}
              >
                <Tab label="CREATE TOKENS" value={TabIndex.CreateToken} />
                <Tab label="MANAGE TOKENS" value={TabIndex.ManageToken} />
              </Tabs>
              <div className={classes.tabContent}>
                <CustomTabPanel
                  value={tabIndex}
                  index={TabIndex.CreateToken}
                  dir={theme.direction}
                >
                  Use DxMint to mint your own token in seconds!
                  <Grid container>
                    <Grid item sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Card className={classes.formCard}>
                        <CustomSelect
                          label="Token Type"
                          selectValue={tokenType}
                          handleSelect={handleSelect}
                        >
                          <option value={TokenType.StandardToken}>
                            Standard Token
                          </option>
                          <option value={TokenType.LiquidityToken}>
                            Liquidity Generator Token
                          </option>
                          <option value={3}>Frictionless Yield Token</option>
                        </CustomSelect>
                        {tokenTypeContent}
                        {formContent}
                        <Fab
                          variant="extended"
                          onClick={createTokens}
                          size="medium"
                          className={classes.FabGreen}
                        >
                          CREATE
                        </Fab>
                      </Card>
                    </Grid>
                    <Grid item sm={3} md={3}></Grid>
                  </Grid>
                </CustomTabPanel>
                <CustomTabPanel
                  value={tabIndex}
                  index={TabIndex.ManageToken}
                  dir={theme.direction}
                >
                  All your tokens generated by DxMint in one easy to manage
                  space!
                  <br />
                  <div className={classes.tabContentOther}>
                    <CustomSelect
                      label="Token Type"
                      selectValue={tokenType}
                      handleSelect={handleSelect}
                    >
                      <option value={TokenType.StandardToken}>
                        Standard Token
                      </option>
                      <option value={TokenType.LiquidityToken}>
                        Liquidity Generator Token
                      </option>
                      <option value={3}>Frictionless Yield Token</option>
                    </CustomSelect>
                  </div>
                  {tokenGroup}
                </CustomTabPanel>
              </div>
            </div>
          </Card>
        </div>
        {loading && (
          <div className={classes.progress}>
            <CircularProgress size={36} className={classes.CircularProgress} />
            <p className={"fs9"}>Create your token</p>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};
