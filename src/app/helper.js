import {
    Navigate,
} from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const auth = localStorage.getItem('auth')
    // const token = localStorage.getItem('token')
    const bot_id = localStorage.getItem('bot_id')
    const store_id = localStorage.getItem('store_id')


    if (auth && bot_id && store_id) return <Navigate to="/dashboard" />
    return children;
}

export const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('auth')
    // const token = localStorage.getItem('token')
    const bot_id = localStorage.getItem('bot_id')
    const store_id = localStorage.getItem('store_id')

    if (!auth && !bot_id && !store_id) return <Navigate to="/" />
    return children;
}

export const rupiahFormat = (value) => value &&
    new Intl.NumberFormat("id-ID", {
        style: 'currency', // add Rp
        currency: "IDR",
        // maximumSignificantDigits: 30
        minimumFractionDigits: 0, //remove ,00
    }).format(value);


    export const numberFormat = (value) => value &&
    new Intl.NumberFormat("id-ID", {
        // style: '', // add Rp
        currency: "IDR",
        // maximumSignificantDigits: 30
        minimumFractionDigits: 0,
    }).format(value);
