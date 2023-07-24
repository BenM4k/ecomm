import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/products/productSlice';
import userSlice from './slices/users/userSlice';
import cartSlice from './slices/cart/cartSlice';
import orderSlice from './slices/order/orderSlice';
import bannerSlice from './slices/banners/banners';
import categorySlice from './slices/category/category';
import wishListSlice from './slices/wishList/wishList';
import testimonialSlice from './slices/testimonials/testimonials';



const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        cart: cartSlice,
        order: orderSlice,
        banner: bannerSlice,
        category: categorySlice,
        wishList: wishListSlice,
        testimonial: testimonialSlice,
    }
})

export default store;