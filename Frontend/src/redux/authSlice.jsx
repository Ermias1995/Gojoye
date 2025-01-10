import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        username: '',
        userType: '',
        email: '',
        isLoggedIn: false,
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const decodedToken = jwtDecode(action.payload.token);
            state.token = action.payload.token;
            state.username = decodedToken.username;
            state.userType = decodedToken.userType;
            state.email = decodedToken.email;
            state.isLoggedIn = true;
            state.error = null; // Clear any previous errors
        },
        logout: (state) => {
            state.token = null;
            state.username = '';
            state.userType = '';
            state.email = '';
            state.isLoggedIn = false;
            state.error = null; // Clear error on logout
        },
        setError: (state, action) => {
            state.error = action.payload; // Set error message
        },
        clearError: (state) => {
            state.error = null; // Clear error message
        },
    },
});

// Export actions
export const { setCredentials, logout, setError, clearError } = authSlice.actions;

// Export reducer
export default authSlice.reducer;