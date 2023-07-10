
import AuthContainer from "../features/auth/AuthContainer";
import DashboardContainer from "../features/dashboard/DashboardContainer";
import LiveAgentContainer from "../features/liveAgent/LiveAgentContainer";
import MarketingContainer from "../features/marketing/MarketingContainer";
import ProductContainer from "../features/product/ProductContainer";
import ProductCreateContainer from "../features/product/ProductCreateContainter";
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
    {
        name: 'Product',
        isSidebarLink: true,
        path: '/product',
        element: <ProductContainer />,
        isPrivate: true
    },
    {
        name: 'Create Product',
        isSidebarLink: true,
        path: '/product/create',
        element: <ProductCreateContainer />,
        isPrivate: true
    },
    {
        name: 'Live Agent',
        isSidebarLink: true,
        path: '/live-agent',
        element: <LiveAgentContainer />,
        isPrivate: true
    },
]