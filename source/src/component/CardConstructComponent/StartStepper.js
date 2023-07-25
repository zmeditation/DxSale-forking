import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import CustomNormalInput from '../CustomBaseComponent/CustomNormalInput';
import { Grid, Card, Table, TableContainer, TableCell, TableRow, TableBody } from '@material-ui/core';
import CustomDatepicker from '../CustomBaseComponent/CustomDatepicker';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '8px'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        borderRadius: '25px',
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },

    formCard: {
        marginTop: '20px',
        padding: '24px'
    }
}));

function getSteps() {
    return ['Token Address', 'Presale Rate', 'Soft/Hard Cap', 'Contribution Limits', 'SushiSwap Liquidity', 'SushiSwap Listing Rate', 'Additional Information', 'Timings'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div>
                    <p>Enter your token address</p>
                    < CustomNormalInput placeholder="Ex. 0x" />
                    <div className={'mt20'}>
                        <p className={'mg10'}>Token Name:</p>
                        <p className={'mg10'}>Token Symbol:</p>
                        <p className={'mg10'}>Token Decimal:</p>
                    </div>
                </div>
            );
        case 1:
            return (
                <div>
                    <p>Enter your presale price: (If I pay 1 ONE, how many tokens do I get?)</p>
                    < CustomNormalInput placeholder="Ex. 500" />
                </div>
            );
        case 2:
            return (
                <div>
                    <p>Enter presale caps: (Must be whole numbers with no decimal places) Softcap must be {'>='} 50% of Hardcap!
                    </p>
                    <Grid container>
                        <Grid item xs={3} className={'textCenter'}>
                            <p className={'mg0'}>Soft Cap:</p>
                            < CustomNormalInput placeholder="Soft Cap ex. 20" />
                        </Grid>
                        <Grid item xs={3} className={'textCenter'}>
                            <p className={'mg0'}>Hard Cap:</p>
                            < CustomNormalInput placeholder="Hard Cap ex. 100" />
                        </Grid>
                    </Grid>
                </div>
            );
        case 3:
            return (
                <div>
                    <p>
                        Enter the minimum and maximum amounts each wallet can contribute: (min,max)
                    </p>
                    <Grid container>
                        <Grid item xs={3} className={'textCenter'}>
                            <p className={'mg0'}>Minimum Contribution Limit:</p>
                            < CustomNormalInput placeholder="Minimum contribution Ex. 0.1" />
                        </Grid>
                        <Grid item xs={3} className={'textCenter'}>
                            <p className={'mg0'}>Maximum Contribution Limit:</p>
                            < CustomNormalInput placeholder="Maximum contribution Ex. 10" />
                        </Grid>
                    </Grid>
                </div>
            );
        case 4:
            return (
                <div>
                    <p>Enter the percentage of raised funds that should be allocated to Liquidity on SushiSwap (Min 51%, Max 100%, We recommend {'>'} 70%)</p>
                    < CustomNormalInput placeholder="Ex. 60" />
                </div>
            );
        case 5:
            return (
                <div>
                    <p>Enter the SushiSwap listing price: (If I buy 1 ONE worth on SushiSwap how many tokens do I get? Usually this amount is lower than presale rate to allow for a higher listing price on SushiSwap)</p>
                    < CustomNormalInput placeholder="Ex. 400" />
                </div>
            );
        case 6:
            return (
                <div>
                    <p>Please fill out the additional information below to display it on your presale. (Information in this section is optional, but a description and logo link is recommended)</p>
                    <p>Note the information in this section can be updated at any time by the presale creator while the presale is active. Any links left blank will not be displayed on your sale.</p>
                    <p className={'mg0 mt3'}>Logo Link: (URL must end with a supported image extension png, jpg, jpeg or gif)</p>
                    < CustomNormalInput placeholder="https://dxsale.network/assets/media/logoIcon_256.png" />
                    <p className={'mg0 mt3'}>Website Link:</p>
                    < CustomNormalInput placeholder="https://dxsale.network" />
                    <p className={'mg0 mt3'}>Github Link:</p>
                    < CustomNormalInput placeholder="https://github.com/OpenZeppelin/openzeppelin-contracts" />
                    <p className={'mg0 mt3'}>Twitter Link:</p>
                    < CustomNormalInput placeholder="https://twitter.com/dxsale" />
                    <p className={'mg0 mt3'}>Reddit Link:</p>
                    < CustomNormalInput placeholder="https://reddit.com/r/cryptocurrency " />
                    <p className={'mg0 mt3'}>Telegram Link:</p>
                    < CustomNormalInput placeholder="https://t.me/dxsale" />
                    <p className={'mg0 mt3'}>Project Description:</p>
                    < CustomNormalInput placeholder="DxSale is a completely decentralized and permissionless launchpad with instant Listing and liquidity locking!" />
                    <p className={'mg0 mt3'}>Any update you want to provide to participants:</p>
                    < CustomNormalInput placeholder="Join us on twitter for a special airdrop giveaway!" />
                </div>
            );
        case 7:
            return (
                <div>
                    <p>
                        Please set the start and end time for the following parameters!
                    </p>
                    <Grid container>
                        <Grid item xs={3} className={'textCenter'}>
                            <p>Presale Start/End Time</p>
                            < CustomDatepicker label="Presale Start Time" />
                        </Grid>
                        <Grid item xs={3} className={'textCenter'}>
                            <p>Maximum Contribution Limit:</p>
                            < CustomDatepicker label="Presale End Time" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} className={'textCenter'}>
                            <p>Liquidity Lockup Time</p>
                            < CustomDatepicker label="Liquidity Unlock Time" />
                        </Grid>
                    </Grid>
                </div>
            );
        default:
            return 'Unknown step';
    }
}

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Token Name'),
    createData('Token Symbol'),
    createData('Presale Rate (Per ONE)'),
    createData('Soft/Hard Caps (ONE)', 'Soft Cap', 'Hard Cap'),
    createData('Contribution Limits (ONE)', 'Min:', 'Max:'),
    createData('Presale Timings', '', 'Starts: 20 AUG 2021 at 12:42', 'Ends: 20 AUG 2021 at 12:42'),
    createData('SushiSwap Liquidity', '%', '', 'Unlocks: 20 AUG 2021 at 12:42'),
    createData('SushiSwap Rate (Per ONE)'),
];

export default function StartStepper() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleEditStep = () => {
        setActiveStep(0);
    };

    const handleSubmit = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div className={classes.actionsContainer}>
                                <div className={'mt2'}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
                <Step>
                    <StepLabel>Finalize</StepLabel>
                    <StepContent>
                    </StepContent>
                </Step>
            </Stepper>
            {activeStep === 8 ? (
                <Card className={classes.formCard}>
                    <p>
                        Review your details below then press submit to create your presale on the DxSale deployer! Or press edit to go back and edit information. Warning: once submitted this information can never be changed!
                    </p>
                    <p className={'mg0 fs8'}>
                        Note: You will need atleast <span className={'textRed'}>0 tokens</span> (0 for Presale, 0 for SushiSwap Listing and 0 for platform fees and an extra 12% to avoid issues due to fees or exploits) in your wallet to start this sale.
                    </p>
                    <p className={'mg0 fs8'}>
                        - You can adjust your total number of tokens required by adjusting the presale rate, uniswap rate or your hardcap!
                    </p>
                    <p className={'mg0 fs8'}>
                        - Tokens that are not used will remain locked in the presale contract (consider them burned)!
                    </p>
                    <TableContainer>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={'mt2'}>
                        <Button
                            onClick={handleEditStep}
                            className={classes.button}
                        >
                            EDIT
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            className={classes.button}
                        >
                            SUBMIT
                        </Button>
                    </div>
                </Card>) : ''}
        </div>
    );
}
