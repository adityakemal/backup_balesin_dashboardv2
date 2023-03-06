import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postOverView = createAsyncThunk('dashboard/postOverView', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/overview`, data)

        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})
export const postCustomerOverview = createAsyncThunk('dashboard/postCustomerOverview', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/customers/overview`, data)

        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const postOutlets = createAsyncThunk('dashboard/postOutlets', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/outlets`, data)

        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})