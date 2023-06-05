import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk('product/getListProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OLD_API_URL}/product`, { params: data })

        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})
