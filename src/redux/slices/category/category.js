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
            desc: "Ullam quidem ex possimus sociosqu? Iste sint cras. Facilisis. Potenti, nunc assumenda nostrud aliqua illo. Ante cras tellus",
            _id: uuid(),
            editing: false,
        },
        {
            title: 'phones',
            desc: "Ornare tempor voluptatum praesentium! Adipisicing sapien, odio per natoque neque perspiciatis praesentium, hendrerit optio ",
            _id: uuid(),
            editing: false,
        },
        {
            title: 'watches',
            desc: "Totam nihil non nulla scelerisque autem cubilia ullamcorper! Officia ullam fugit turpis felis platea sapiente mollis, wisi. Quisquam?",
            _id: uuid(),
            editing: false,
        },
        {
            title: 'earphones',
            desc: "Ipsam est tempor duis perferendis eius ante pulvinar maecenas minus quas commodo conubia tempus delectus vulputate ipsa",
            _id: uuid(),
            editing: false,
        },
        {
            title: 'speakers',
            desc: "Rerum eiusmod incididunt molestias do elit assumenda do qui dicta, inceptos blanditiis mauris diam. Cras ullamco! Hendrerit non",
            _id: uuid(),
            editing: false,
        },
    ],
    reducers: {
        addCategory: (state, action) => {
            const newCAt = {
                _id: uuid(),
                title: action.payload.title,
                desc: action.payload.desc,
                editing: false,
            }
            state.push(newCAt);
        },
        editCategory: (state, action) => {
            const category = state.find(c => c._id === action.payload);
            category.editing = !category.editing;
        },
        changeCategory: (state, action) => {
            const category = state.find(c => c._id === action.payload._id);
            category.title = action.payload.title;
            category.desc = action.payload.desc;
        },
        deleteCategory: (state, action) => {
            return state.filter(c => c._id !== action.payload)
        }
    },
    extraReducers: {
        [getCategory.fulfilled]: (state, action) => {
            state = action.payload;
        }
    }
})

export const { addCategory, editCategory, changeCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;