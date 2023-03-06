import { createSlice } from "@reduxjs/toolkit";
import { postCustomerOverview, postOutlets, postOverView } from "./dashboard.api";



const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        loading: false,
        error: {},
        overViewData: {},
        transactionActivity: [],
        customerOverViewData: {},
        // outletWithValue : []
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
            state.transactionActivity = payload.transaction_activity
            
        },
        [postOverView.rejected]: (state, action) => {
            state.loading = false
        },

        //customer overview
        [postCustomerOverview.pending]: (state, action) => {
            state.loading = true
        },
        [postCustomerOverview.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log(payload, 'payload data dashboard')

            state.customerOverViewData = payload
        },
        [postCustomerOverview.rejected]: (state, action) => {
            state.loading = false
        },
        //outlets with value
        [postOutlets.pending]: (state, action) => {
            state.loading = true
        },
        [postOutlets.fulfilled]: (state, { payload }) => {
            state.loading = false
            // console.log(payload.outlets_potential_sales, 'payload data outlets')
            // state.outletWithValue = payload.outlets_potential_sales

            
        },
        [postOutlets.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

// export const { handleRegister } = dashboardSlice.actions

export default dashboardSlice.reducer