import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    properties: [],
    loading: false,
    error: null,
};

const getToken = () => {
    return localStorage.getItem('token');
};

export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
    const response = await axios.get('https://gojoye-backend.onrender.com/properties');
    console.log(response);
    return response.data;
});

export const addProperty = createAsyncThunk(
    'properties/addProperty',
    async (property) => {
        const response = await axios.post('https://gojoye-backend.onrender.com/add', property, {
            headers: {
                Authorization: `Bearer ${getToken()}` // Include the token
            }
        });
        return response.data.property;
    }
);

export const updateProperty = createAsyncThunk(
    'properties/updateProperty',
    async ({ id, property }) => {
        const response = await axios.put(`https://gojoye-backend.onrender.com/properties/${id}`, property, {
            headers: {
                Authorization: `Bearer ${getToken()}` // Include the token
            }
        });
        return response.data.property;
    }
);

export const deleteProperty = createAsyncThunk(
    'properties/deleteProperty',
    async (id) => {
        await axios.delete(`https://gojoye-backend.onrender.com/properties/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}` // Include the token
            }
        });
        return id;
    }
);

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchProperties.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.properties = action.payload;
            })
            .addCase(fetchProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProperty.fulfilled, (state, action) => {
                state.properties.push(action.payload);
            })
            .addCase(updateProperty.fulfilled, (state, action) => {
                const index = state.properties.findIndex((p) => p._id === action.payload._id);
                state.properties[index] = action.payload;
            })
            .addCase(deleteProperty.fulfilled, (state, action) => {
                state.properties = state.properties.filter((p) => p._id !== action.payload);
            });
    }
})

export default propertySlice.reducer;