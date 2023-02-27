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