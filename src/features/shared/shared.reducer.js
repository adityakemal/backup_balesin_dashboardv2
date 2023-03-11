import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {  postStoreInfo } from "./shared.api";


const sharedSclice = createSlice({
    name: 'shared',
    initialState: {
        loadingOutletList: false,
        outletActive: {},
        mainStoreInfo : {},
        outletList: [],
        dateRangeFilter : [
            dayjs().add(-7, "d"),
            dayjs(),
        ],
        outletId: -1,
        isRefresh : false
    },
    reducers: {
        handleRefresh: (state, { payload }) => {

            state.isRefresh = !state.isRefresh 
        },
        handleOutletId: (state, { payload }) => {
            console.log(payload, 'in reducers')

            state.outletId = payload 
        },
        handleActiveuOtlet: (state, { payload }) => {
            console.log(payload, 'in reducers')
            state.outletActive = payload 
        },

        handleDateRange: (state, { payload }) => {
            console.log(payload, 'in reducers')
            state.dateRangeFilter = payload 
        }
    },
    extraReducers: {
        //get address
        // [getAddressList.pending]: (state, action) => {
        //     state.loadingAddress = true
        // },
        // [getAddressList.fulfilled]: (state, { payload }) => {
        //     state.loadingAddress = false
        //     state.addressList = payload.data
        // },
        // [getAddressList.rejected]: (state, action) => {
        //     state.loadingAddress = false
        // },
        [postStoreInfo.pending]: (state, action) => {
            state.loadingOutletList = true
        },
        [postStoreInfo.fulfilled]: (state, { payload }) => {
            state.loadingOutletList = false
            state.mainStoreInfo = payload.main_store_info
            // console.log(payload, 'STORE INFO')
            // state.addressList = payload.data
            state.outletList = payload.outlets_info
        },
        [postStoreInfo.rejected]: (state, action) => {
            state.loadingOutletList = false
        },
    }

})

export const { handleActiveuOtlet, handleDateRange, handleOutletId, handleRefresh } = sharedSclice.actions


export default sharedSclice.reducer