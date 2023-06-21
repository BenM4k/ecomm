import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "0",
            name: 'EarBuds',
            image: '../../assets/celec.png',
            desc: 'Great sound earphones',
            price: 10,
        },
        {
            id: "1",
            name: 'AirPods',
            image: '../assets/celec.png',
            desc: 'First Quality earphones',
            price: 50,
        },
        {
            id: "2",
            name: 'Apple Watch',
            image: '../assets/celec.png',
            desc: 'Control everything digital with this watch',
            price: 100,
        },
        {
            id: "3",
            name: 'Iphone X',
            image: '../assets/celec.png',
            desc: 'Latest Iphone on the market',
            price: 499,
        },
        {
            id: "4",
            name: 'Samsung Note9',
            image: '../assets/celec.png',
            desc: 'The OLED display is outstanding',
            price: 599,
        },
    ],
    login: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleLogin : (state) => {
            state.login = !state.login;
        },
    },
});

export const { toggleLogin } = ProductSlice.actions;
export default ProductSlice.reducer;