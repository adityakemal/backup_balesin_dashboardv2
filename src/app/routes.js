
import AuthContainer from "../features/auth/AuthContainer";
import DashboardContainer from "../features/dashboard/DashboardContainer";
import MarketingContainer from "../features/marketing/MarketingContainer";
import SalesContainer from "../features/sales/SalesContainer";


export default [
    {
        name: 'Auth',
        isSidebarLink: true,
        path: '/',
        element: <AuthContainer />,
        isPrivate: false
    },
    {
        name: 'Dashboard',
        isSidebarLink: true,
        path: '/dashboard',
        element: <DashboardContainer />,
        isPrivate: true
    },
    {
        name: 'Dashboard',
        isSidebarLink: true,
        path: '/dashboard/:outlet_id',
        element: <DashboardContainer />,
        isPrivate: true
    },
    {
        name: 'Sales',
        isSidebarLink: true,
        path: '/sales',
        element: <SalesContainer />,
        isPrivate: true
    },
    {
        name: 'Sales',
        isSidebarLink: true,
        path: '/sales/:outlet_id',
        element: <SalesContainer />,
        isPrivate: true
    },
    {
        name: 'Marketing',
        isSidebarLink: true,
        path: '/marketing',
        element: <MarketingContainer />,
        isPrivate: true
    },
    {
        name: 'Marketing',
        isSidebarLink: true,
        path: '/marketing/:outlet_id',
        element: <MarketingContainer />,
        isPrivate: true
    },
]