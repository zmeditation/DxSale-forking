import React from 'react';
import { DxMint } from "../pages/DxMint";
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
import { Dxsupport } from '../pages/Dxsupport';
import { Icon } from '@iconify/react';
export const staticMenu = [
    {
        id: 1,
        menuName: 'DxMint',
        menuDescription: 'DxMint menus',
        path: '/app/v2_9/DxMint',
        component: DxMint,
        exact: true,
        icon: <Icon icon="ion:logo-bitcoin" style={{ fontSize: '24px' }} />,
        submenu: []
    },
    {
        id: 2,
        menuName: 'DxLaunch',
        menuDescription: 'DxLaunch menus',
        exact: true,
        icon: <Icon icon="raphael:plane" style={{ fontSize: '30px' }} />,
        submenu: [
            {
                id: 17,
                menuName: 'LAUNCHPAD',
                path: 'subtitle',
                icon: '',
            },
            {
                id: 3,
                menuName: 'Dashboard',
                path: '/app/v2_9/defi-dashboard',
                component: Dashboard,
                icon: '',
            },
            {
                id: 4,
                menuName: 'Start or Manage',
                menuDescription: 'To Setup transactions',
                path: '/app/v2_9/deficreatesale',
                component: Startmanage,
                icon: '',
            }
        ]
    },
    {
        id: 5,
        menuName: 'DxLock',
        menuDescription: '',
        exact: true,
        icon: <Icon icon="ph:lock-key-fill" style={{ fontSize: '24px' }} />,
        submenu: [
            {
                id: 6,
                menuName: 'View Lockers',
                path: '/app/v2_9/dxlock',
                component: Viewlockers,
                icon: '',
            },
            {
                id: 18,
                menuName: 'LOCK OR MANAGE ASSETS',
                path: 'subtitle',
                icon: '',
            },
            {
                id: 7,
                menuName: 'Lock LP Tokens',
                path: '/app/v2_9/dxlockcreate',
                component: Locklptokens,
                icon: '',
            },
            {
                id: 8,
                menuName: 'Lock Tokens',
                menuDescription: 'To Setup transactions',
                path: '/app/v2_9/dxlocktokencreate',
                component: Locktokens,
                icon: '',
            }
        ]
    },
    {
        id: 9,
        menuName: 'DxSupport',
        menuDescription: 'DxMint menus',
        component: Dxsupport,
        exact: true,
        icon: <Icon icon="fa:question" style={{ fontSize: '24px' }} />,
        submenu: []
    },
    {
        id: 10,
        menuName: 'Archives',
        exact: true,
        path: '/app/defi-dashboard',
        icon: <Icon icon="ion:file-tray-full-sharp" style={{ fontSize: '24px' }} />,
        submenu: [
            {
                id: 19,
                menuName: 'V2.5',
                path: 'subtitle',
                icon: '',
            },
            {
                id: 11,
                menuName: 'DxLaunch',
                path: '/app/defi-dashboard',
                component: Defidashboard,
                icon: '',
            },
            {
                id: 12,
                menuName: 'DxLock',
                menuDescription: 'To Setup transactions',
                path: '/app/pages/dxlock',
                component: Dxlock,
                icon: '',
            },
            {
                id: 20,
                menuName: 'V1 DEFI',
                path: 'subtitle',
                icon: '',
            },
            {
                id: 13,
                menuName: 'DxLaunch',
                path: '/app/defi-dashboard-v1',
                component: Defidashboardv1,
                icon: '',
            },
            {
                id: 14,
                menuName: 'DxLock',
                path: '/app/pages/dxlockv1',
                component: Dxlockv1,
                icon: '',
            },
            {
                id: 21,
                menuName: 'V1 STANDARD',
                path: 'subtitle',
                icon: '',
            },
            {
                id: 15,
                menuName: 'DxLaunch',
                path: '/app/launch-dashboard',
                component: Launchdashboard,
                icon: '',
            },
            {
                id: 16,
                menuName: 'Dxstake',
                path: '/app/pages/dxstake',
                component: Dxstake,
                icon: '',
            }
        ]
    },
];