import {configureStore} from '@reduxjs/toolkit';
import propertyReducer from './propertySlice';
import authReducer from './authSlice';


const store = configureStore({
    reducer : {
        properties: propertyReducer,
        auth: authReducer,
    }
});

export default store;