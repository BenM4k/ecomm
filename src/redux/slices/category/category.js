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
        },
        {
            title: 'phones',
            desc: "Ornare tempor voluptatum praesentium! Adipisicing sapien, odio per natoque neque perspiciatis praesentium, hendrerit optio ",
            _id: uuid(),
        },
        {
            title: 'watches',
            desc: "Totam nihil non nulla scelerisque autem cubilia ullamcorper! Officia ullam fugit turpis felis platea sapiente mollis, wisi. Quisquam?",
            _id: uuid(),
        },
        {
            title: 'earphones',
            desc: "Ipsam est tempor duis perferendis eius ante pulvinar maecenas minus quas commodo conubia tempus delectus vulputate ipsa",
            _id: uuid(),
        },
        {
            title: 'speakers',
            desc: "Rerum eiusmod incididunt molestias do elit assumenda do qui dicta, inceptos blanditiis mauris diam. Cras ullamco! Hendrerit non",
            _id: uuid(),
        },
    ],
    reducers: {
        addCategory: (state, action) => {
            console.log(action.payload)
            const newCAt = {
                _id: uuid(),
                title: action.payload.title,
                desc: action.payload.desc,
            }
            state.push(newCAt);
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