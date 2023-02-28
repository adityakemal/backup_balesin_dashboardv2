import { createSlice } from "@reduxjs/toolkit";
import { postOverView } from "./dashboard.api";



const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        loading: false,
        error: {},
        listOutletSales: [],
        overViewData: {},
        transactionActivity : []
        // isRegister: false
    },
    reducers: {
        // handleRegister: (state, action) => {
        //     state.isRegister = !state.isRegister
        // },
    },
    extraReducers: {
        [postOverView.pending]: (state, action) => {
            state.loading = true
        },
        [postOverView.fulfilled]: (state, { payload }) => {
            state.loading = false
            // console.log(payload, 'payload data dashboard')
            state.overViewData = payload
            state.listOutletSales = payload.list_outlet_sales
            state.transactionActivity = payload.transaction_activity
            
        },
        [postOverView.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

// export const { handleRegister } = dashboardSlice.actions

export default dashboardSlice.reducer