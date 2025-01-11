import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        checkoutStart(state) {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        checkoutSuccess(state) {
            state.loading = false;
            state.success = true;
        },
        checkoutFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        resetCheckout(state) {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
});
export const checkout = (propertyId, moveInDate, rentalDuration, buyerInfo, paymentMethod, transactionType) => async (dispatch) => {
    dispatch(checkoutStart());
    try {
        const response = await axios.post(`https://gojoye-backend.onrender.com/checkout/${propertyId}`, {
            moveInDate,
            rentalDuration,
            buyerInfo: transactionType === 'sale' ? buyerInfo : {},
            paymentMethod,
        });
        dispatch(checkoutSuccess());
        return response.data;
    } catch (error) {
        dispatch(checkoutFailure(error.response?.data?.message || 'Error during checkout'));
    }
};

export const { checkoutStart, checkoutSuccess, checkoutFailure, resetCheckout,
} = checkoutSlice.actions;


export default checkoutSlice.reducer;