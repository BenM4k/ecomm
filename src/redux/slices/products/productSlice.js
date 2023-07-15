import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../Client";


export const getProducts = createAsyncThunk('products/GetProducts', async (_, thunkAPI) => {
    const query = `*[_type == 'product']`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue("Could not fetch the products.");
    }
})

export const getCategory = createAsyncThunk('category/GetCategory', async (_, thunkAPI) => {
    const query = `*[_type == 'category']`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue('could not fetch the category');
    }
})

const initialState = {
    products: [],
    categories: [],
    error: '',
    productLoading: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.productLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.categories = action.payload;
        }
    }
});

export default ProductSlice.reducer;