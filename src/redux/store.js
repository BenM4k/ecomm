import { configureStore } from '@reduxjs/toolkit';

import apiSlice from './api/apiSlice';
import cartSlice from './slices/cart/cartSlice';
import orderSlice from './slices/order/orderSlice';
import wishListSlice from './slices/wishList/wishList';
import searchSlice from './slices/search/searchSlice';
import authSlice from './slices/authSlice/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlice,
        order: orderSlice,
        wishList: wishListSlice,
        search: searchSlice,
        auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store;