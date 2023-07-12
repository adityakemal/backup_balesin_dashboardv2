import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getListProduct, getMarket, getOutletProduct, postProduct } from "./product.api";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        listProductData: [],
        listMarket: [],
        listOutletProduct: [],
    },
    reducers: {
        // handleRegister: (state, action) => {
        //     state.isRegister = !state.isRegister
        // },
    },
    extraReducers: {
        [getListProduct.pending]: (state, action) => {
            state.loading = true
        },
        [getListProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            // console.log(payload, 'payload data product')
            state.listProductData = payload.response
        },
        [getListProduct.rejected]: (state, action) => {
            state.loading = false
        },

        //get market
        [getMarket.pending]: (state, action) => {
            state.loading = true
        },
        [getMarket.fulfilled]: (state, { payload }) => {
            state.loading = false
            // console.log(payload, 'payload data MARKET')
            state.listMarket = payload.response
        },
        [getMarket.rejected]: (state, action) => {
            state.loading = false
        },

        //get outlet by market
        [getOutletProduct.pending]: (state, action) => {
            state.loading = true
        },
        [getOutletProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            // console.log(payload, 'payload data MARKET')
            state.listOutletProduct = payload?.response || []
        },
        [getOutletProduct.rejected]: (state, action) => {
            state.loading = false
        },

        [postProduct.pending]: (state, action) => {
            state.loading = true
        },
        [postProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [postProduct.rejected]: (state, action) => {
            state.loading = false
        },
        //delete prod
        [deleteProduct.pending]: (state, action) => {
            state.loading = true
        },
        [deleteProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [deleteProduct.rejected]: (state, action) => {
            state.loading = false
        },

    }

})

// export const { handleRegister } = dashboardSlice.actions

export default productSlice.reducer