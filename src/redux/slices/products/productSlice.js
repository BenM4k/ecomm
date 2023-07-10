import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../Client";


export const getProducts = createAsyncThunk('products/GetProducts', async (_, thunkAPI) => {
    const query = `*[_type == 'product']`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Couldnt fetch the products");
    }
})

export const getCategory = createAsyncThunk('category/Getcategory', async (_, thunkAPI) => {
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
    cart: [],
    categories: [],
    error: '',
    productLoading: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isDuplicate = state.cart.some(element => element._id === action.payload._id);
            if (isDuplicate) return;
            state.cart.push(action.payload);
        },
        removeToCart: (state, action) => {
            state.cart.filter((item) => item._id === !action.payload._id)
        },
    },
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

export const { addToCart, removeToCart } = ProductSlice.actions;
export default ProductSlice.reducer;