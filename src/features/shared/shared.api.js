import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// export const getAddressList = createAsyncThunk('shared/getAddressList', async (params, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/storeinfo`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//         // console.log(response)
//         return response.data
//     } catch (error) {
//         console.log(error.response, 'error response')
//         return rejectWithValue(error)
//     }
// })

export const postStoreInfo = createAsyncThunk('shared/postStoreInfo', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/storeinfo`, data)

        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

