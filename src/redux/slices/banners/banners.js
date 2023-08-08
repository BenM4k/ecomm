import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import phone from '../../../assets/pexels-christina-morillo-1181519.jpg';
import samsung from '../../../assets/pexels-andrea-piacquadio-3769009.jpg';


const bannerSlice = createSlice({
    name: 'banner',
    initialState: [
        {
            id: uuid(),
            img: phone,
            title: "Welcome to our Store",
            desc: "Dictumst animi occaecati exercitationem pharetra ac aut sagittis vero aliquet, tellus nisi, curae luctus, ipsa, veniam, aliquip ad, soluta! Harum pellentesque earum scelerisque soluta totam aperiam optio",
            editing: false,
        },
        {
            id: uuid(),
            img: samsung,
            title: "The best Online Store",
            desc: "Cum provident imperdiet mi eius alias dolor imperdiet similique! Dolorem elit risus pretium omnis, hendrerit, repellat harum doloribus?",
            editing: false,
        },
    ],
    reducers: {
        addBanner: (state, action) => {
            const newBanner = {
                id: uuid(),
                img: action.payload.img,
                title: action.payload.title,
                desc: action.payload.desc,
                editing: false,
            }
            state.push(newBanner);
        },
        removeBanner: (state, action) => {
            state.filter(banner => banner.id !== action.payload);
        },
        editBanner: (state, action) => {
            const banner = state.find(banner => banner.id === action.payload);
            banner.editing = !banner.editing;
        },
        updateBanner: (state, action) => {
            const banner = state.find(banner => banner.id === action.payload.id);
            banner.title = action.payload.title;
            banner.desc = action.payload.desc;
        },
        deleteBanner: (state, action) => {
            return state.filter(banner => banner.id !== action.payload);
        }
    }
});

export const { addBanner, removeBanner, editBanner, updateBanner, deleteBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
