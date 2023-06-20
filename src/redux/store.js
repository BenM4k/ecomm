import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/products/productSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
    }
})

export default store;