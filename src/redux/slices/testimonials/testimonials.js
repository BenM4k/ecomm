import { createSlice } from '@reduxjs/toolkit';
import photo from '../../../assets/pngimg.com - iphone_14_PNG24.png';

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: [
        {
            feedback: "Veniam nonummy libero voluptas, urna! Non soluta, illo nostrum! Laudantium, ad quod lobortis eaque placeat, minus, nascetur fames nunc quo,",
            name: "Bee Mak",
            company: "Lavish Store",
            img: photo,
        },
        {
            feedback: "Ad leo euismod nonummy placerat elementum sunt congue totam odio risus porro vehicula magnam nec elit mollit sapiente semper",
            name: "Howard Mak",
            company: "Lavish Store",
            img: photo,
        },
    ],
    reducers: {
        addTestimonial: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;