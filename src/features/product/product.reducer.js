import { createSlice } from "@reduxjs/toolkit";
import { getListProduct } from "./product.api";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        listProductData: [],
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
            console.log(payload, 'payload data product')
            state.listProductData = payload.response
        },
        [getListProduct.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

// export const { handleRegister } = dashboardSlice.actions

export default productSlice.reducer