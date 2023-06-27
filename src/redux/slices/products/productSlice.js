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
        toggleCart: (state) => {
            state.cartOpen = !state.cartOpen;
        },
        addToCart: (state, action) => {
            const isDuplicate = state.cart.some(element => element.id === action.payload.id);
            if (isDuplicate) {
                return;
            }
            state.cart.push(action.payload);
        },
        addCount: (state, action) => {
            const product = state.cart.find(product => product.id === action.payload.id);
            product.itemCount += 1;
        },
        removeCount: (state, action) => {
            const product = state.cart.find(product => product.id === action.payload.id);
            if (product.itemCount > 1) {
                product.itemCount -= 1;
            }
            else {
                return;
            }
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

export const { addToCart, toggleCart, toggleLogin, toggleSignup, addCount, removeCount } = ProductSlice.actions;
export default ProductSlice.reducer;