import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../Client";
import { v4 as uuid } from 'uuid';

export const getCategory = createAsyncThunk('category/GetCategory', async (_, thunkAPI) => {
    const query = `*[_type == 'category']`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue('could not fetch the category');
    }
})

const categorySlice = createSlice({
    name: 'category',
    initialState: [
        {
            title: 'headphones',
            _id: uuid(),
        },
        {
            title: 'phones',
            _id: uuid(),
        },
        {
            title: 'watches',
            _id: uuid(),
        },
        {
            title: 'earphones',
            _id: uuid(),
        },
        {
            title: 'speakers',
            _id: uuid(),
        },
    ],
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: {
        [getCategory.fulfilled]: (state, action) => {
            state = action.payload;
        }
    }
})

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;