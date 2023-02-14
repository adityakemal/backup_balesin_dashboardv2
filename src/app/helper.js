import {
    Navigate,
} from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const auth = localStorage.getItem('auth')
    const token = localStorage.getItem('token')


    if (auth && token) return <Navigate to="/dashboard" />
    return children;
}

export const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('auth')
    const token = localStorage.getItem('token')

    if (!auth && !token) return <Navigate to="/" />
    return children;
}

export const rupiahFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
        style: 'currency', // add Rp
        currency: "IDR",
        maximumSignificantDigits: 20
    }).format(value);
