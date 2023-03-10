import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk('login/postLogin', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth`, data)

        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})