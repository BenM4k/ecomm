import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "0",
            name: 'EarBuds',
            image: '../../assets/celec.png',
            desc: 'Great sound earphones',
            price: 10,
            itemCount: 1,
        },
        {
            id: "1",
            name: 'AirPods',
            image: '../assets/celec.png',
            desc: 'First Quality earphones',
            price: 50,
            itemCount: 1,
        },
        {
            id: "2",
            name: 'Apple Watch',
            image: '../assets/celec.png',
            desc: 'Control everything digital with this watch',
            price: 100,
            itemCount: 1,
        },
        {
            id: "3",
            name: 'Iphone X',
            image: '../assets/celec.png',
            desc: 'Latest Iphone on the market',
            price: 499,
            itemCount: 1,
        },
        {
            id: "4",
            name: 'Samsung Note9',
            image: '../assets/celec.png',
            desc: 'The OLED display is outstanding',
            price: 599,
            itemCount: 1,
        },
    ],
    login: false,
    cart: [],
    cartOpen: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleLogin : (state) => {
            state.login = !state.login;
        },
        toggleCart : (state) => {
            state.cartOpen = !state.cartOpen;
        },
        addToCart : (state, action) => {
            const isDuplicate = state.cart.some(element => element.id === action.payload.id);
            if (isDuplicate) {
                return;
            }
            state.cart.push(action.payload);
        },
        addCount: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            product.itemCount += 1;
        },
        removeCount: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product.itemCount > 1 ) {
                product.itemCount -= 1 ;
            }
            else {
                return;
            }
        },
    },
});

export const { addToCart, toggleCart, toggleLogin, addCount, removeCount } = ProductSlice.actions;
export default ProductSlice.reducer;