import {configureStore} from '@reduxjs/toolkit';
import propertyReducer from './propertySlice';
import authReducer from './authSlice';
import checkoutReducer from './checkoutSlice';


const store = configureStore({
    reducer : {
        properties: propertyReducer,
        auth: authReducer,
        checkout: checkoutReducer,
    }
});

export default store;