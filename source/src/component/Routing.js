import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { useStyles } from '../static/MiniDrawerStyles';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { Termsandconditions } from '../pages/Termsandconditions';
import { DxMint } from '../pages/DxMint';
import { Dashboard } from "../pages/DxLaunch/Dashboard";
import { Startmanage } from "../pages/DxLaunch/Startmanage";
import { Viewlockers } from "../pages/DxLock/Viewlockers";
import { Locklptokens } from "../pages/DxLock/Locklptokens";
import { Locktokens } from "../pages/DxLock/Locktokens";
import { Defidashboard } from "../pages/Archives/Defidashboard";
import { Dxlock } from "../pages/Archives/Dxlock";
import { Defidashboardv1 } from "../pages/Archives/Defidashboardv1";
import { Dxlockv1 } from "../pages/Archives/Dxlockv1";
import { Launchdashboard } from "../pages/Archives/Launchdashboard";
import { Dxstake } from "../pages/Archives/Dxstake";
import { Footer } from './Layout/Footer';
import { Dxlockview } from '../pages/Dxlockview';
import { Dxsupport } from '../pages/Dxsupport';
import { Defipresale } from '../pages/Defipresale';
import clsx from 'clsx';

export const Routing = (props) => {
    const { content, toolbar, contentShift } = useStyles();
    const { openSideBar } = props;
    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/app/privacypolicy" component={PrivacyPolicy} />
                <Route path="/app/termsandconditions" component={Termsandconditions} />
                <Route path="/app/v2_9/DxMint" component={() => <DxMint />} />
                <Route path="/app/v2_9/defi-dashboard" component={() => <Dashboard />} />
                <Route path="/app/v2_9/deficreatesale" component={() => <Startmanage />} />
                <Route path="/app/v2_9/defipresale" component={() => <Defipresale />} />
                <Route path="/app/v2_9/dxlock" component={() => <Viewlockers />} />
                <Route path="/app/v2_9/dxlockview" component={() => <Dxlockview />} />
                <Route path="/app/v2_9/dxlockcreate" component={() => <Locklptokens />} />
                <Route path="/app/v2_9/dxlocktokencreate" component={() => <Locktokens />} />
                <Route path="/app/pages/dxsupport" component={Dxsupport} />
                <Route path="/app/defi-dashboard" component={() => <Defidashboard />} />
                <Route path="/app/pages/defipresale" component={() => <Defipresale />} />
                <Route path="/app/pages/dxlock" component={() => <Dxlock />} />
                <Route path="/app/defi-dashboard-v1" component={() => <Defidashboardv1 />} />
                <Route path="/app/pages/defipresalev1" component={() => <Defipresale />} />
                <Route path="/app/pages/dxlockv1" component={() => <Dxlockv1 />} />
                <Route path="/app/pages/dxlockview" component={() => <Dxlockview />} />
                <Route path="/app/pages/dxlockcreate" component={() => <Locklptokens />} />
                <Route path="/app/pages/dxlocktokencreate" component={() => <Locktokens />} />
                <Route path="/app/launch-dashboard" component={() => <Launchdashboard />} />
                <Route path="/app/pages/dxstake" component={() => <Dxstake />} />
            </Switch>
            <Footer />
        </main>);
}