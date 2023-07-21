import { createSlice } from "@reduxjs/toolkit";
import phone from '../../../assets/pngimg.com - iphone_14_PNG24.png';
import samsung from '../../../assets/samsung_s9_plus1_1__1.webp';


const bannerSlice = createSlice({
    name: 'banner',
    initialState: [samsung, phone],
    reducers: []
});

export default bannerSlice.reducer;
