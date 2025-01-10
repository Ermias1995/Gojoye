import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://gojoye-backend.onrender.com';

const initialState = {
    properties: [],
    property: null,
    loading: false,
    error: null,
};

// Fetch properties
export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
});

// Add property with token in Authorization header
export const addProperty = createAsyncThunk('properties/addProperty', async (property) => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    const response = await axios.post(`${API_URL}/properties/add`, property, {
        headers: {
            'token': `Bearer ${token}`, // Correctly set Authorization header
        },
    });
    return response.data.property;
});

// Update property
export const updateProperty = createAsyncThunk('properties/updateProperty', async ({ id, property }) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/properties/${id}`, property, {
        headers: {
            'token': `Bearer ${token}`,
        },
    });
    return response.data.property;
});

// Delete property
export const deleteProperty = createAsyncThunk('properties/deleteProperty', async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/properties/${id}`, {
        headers: {
            "token": `Bearer ${token}`,
        },
    });
    return id;
});

// Property slice
const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
                const index = state.properties.findIndex(property => property._id === action.payload._id);
                if (index !== -1) {
                    state.properties[index] = action.payload;
                }
            })
            .addCase(deleteProperty.fulfilled, (state, action) => {
                state.properties = state.properties.filter(property => property._id !== action.payload);
            });
    },
});

export default propertySlice.reducer;