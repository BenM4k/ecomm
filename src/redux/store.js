import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/products/productSlice';
import userSlice from './slices/users/userSlice';
import cartSlice from './slices/cart/cartSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        cart: cartSlice,
    }
})

export default store;