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
        },
        {
            id: uuid(),
            img: samsung,
            title: "The best Online Store",
            desc: "Cum provident imperdiet mi eius alias dolor imperdiet similique! Dolorem elit risus pretium omnis, hendrerit, repellat harum doloribus?",
        },
    ],
    reducers: {
        addBanner: (state, action) => {
            const newBanner = {
                id: uuid(),
                img: action.payload.img,
                title: action.payload.title,
                desc: action.payload.desc,
            }
            state.push(newBanner);
        },
        removeBanner: (state, action) => {
            state.filter(banner => banner.id !== action.payload);
        }
    }
});

export const { addBanner, removeBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
