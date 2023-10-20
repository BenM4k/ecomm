import { configureStore } from '@reduxjs/toolkit';

import apiSlice from './apiSlice';
import productSlice from './slices/products/productSlice';
import userSlice from './slices/users/userSlice';
import cartSlice from './slices/cart/cartSlice';
import orderSlice from './slices/order/orderSlice';
import bannerSlice from './slices/banners/banners';
import categorySlice from './slices/category/category';
import wishListSlice from './slices/wishList/wishList';
import testimonialSlice from './slices/testimonials/testimonials';
import searchSlice from './slices/search/searchSlice';
import authSlice from './slices/authSlice/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        product: productSlice,
        user: userSlice,
        cart: cartSlice,
        order: orderSlice,
        banner: bannerSlice,
        category: categorySlice,
        wishList: wishListSlice,
        testimonial: testimonialSlice,
        search: searchSlice,
        auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store;