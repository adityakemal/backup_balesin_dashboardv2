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


// https://faq.balesin.id/api/store/product

export const postProduct = createAsyncThunk('product/postProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_OLD_API_URL}/product`, data)

        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const putProduct = createAsyncThunk('product/putProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_OLD_API_URL}/product`, data)

        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})


export const getMarket = createAsyncThunk('product/getMarket', async (params, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OLD_API_URL}/market`, {
            params: params
        })

        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const getOutletProduct = createAsyncThunk('product/getOutletProduct', async (params, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OLD_API_URL}/outlet`, {
            params: params
        })
        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (data, { rejectWithValue }) => {
    console.log(data)
    try {
        const response = await axios.delete(`${process.env.REACT_APP_OLD_API_URL}/product`, { data })
        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const getDetailProduct = createAsyncThunk('product/getDetailProduct', async (params, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OLD_API_URL}/product/info`, {
            params: params
        })
        // console.log(response, 'in api js')
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})


// fetch("https://faq.balesin.id/api/store/product", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgwNywiZW1haWwiOiJiYWxlc2luaWRAZ21haWwuY29tIiwiaWF0IjoxNjg4OTU1NjQ5MTI3LCJleHAiOjE2ODg5NTU2NDkxMjd9.AIOjHu3elCndi3y74ymufCACljRTo1yTSOJuMxeJyWk",
//     "cookie": "_ga=GA1.2.1825878926.1676368382; _hjSessionUser_1508670=eyJpZCI6ImRjZThhYjYzLWZhODAtNTAwMi05ZWVhLTUwMjRhMDhhZmIxOCIsImNyZWF0ZWQiOjE2NzYzNjgzODIwNzUsImV4aXN0aW5nIjp0cnVlfQ==; auth.strategy=local; _ga_9H6K46RT7E=GS1.2.1688978264.2.1.1688979055.0.0.0; _gid=GA1.2.1082980443.1689158079",
//     "Referer": "https://faq.balesin.id/store/product",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"bot_id\":103,\"store_id\":76,\"product_id\":10921}",
//   "method": "DELETE"
// });



