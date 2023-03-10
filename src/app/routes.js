
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
        name: 'Sales',
        isSidebarLink: true,
        path: '/sales',
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
]