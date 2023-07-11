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
    categories: [],
    error: '',
    productLoading: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        itemCountPlus: (state, action) => {
            console.log(action.payload._id)

        },
        itemCountMinus: (state, action) => {
            const newCart = state.cart.filter((item) => item.id === action.payload._id);
            console.log(newCart)
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

export const { addToCart, removeToCart, itemCountPlus, itemCountMinus } = ProductSlice.actions;
export default ProductSlice.reducer;