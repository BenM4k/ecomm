import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/products/productSlice';
import userSlice from './slices/users/userSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
    }
})

export default store;