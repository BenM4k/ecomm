import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addWish: (state, action) => {
            state.push(action.payload);
        }
    },
})

export default wishListSlice.reducer;