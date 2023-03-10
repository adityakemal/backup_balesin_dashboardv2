import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./auth.api";



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: {},
        // count: -1
    },
    reducers: {
        // handleCount: (state, action) => {
        //     state.count = state.count +1
        // },
    },
    extraReducers: {
        [postLogin.pending]: (state, action) => {
            state.loading = true
        },
        [postLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [postLogin.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

// export const { handleCount } = authSlice.actions

export default authSlice.reducer