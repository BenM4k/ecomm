import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: 'ProductOne',
        image: 'prod1',
        desc: 'earbuds',
        price: 10,
    },
    {
        id: 1,
        name: 'ProductTwo',
        image: 'prod2',
        desc: 'airPods',
        price: 50,
    },
    {
        id: 2,
        name: 'ProductTree',
        image: 'prod3',
        desc: 'appleWatch',
        price: 100,
    },
    {
        id: 3,
        name: 'ProductFour',
        image: 'prod4',
        desc: 'iphone',
        price: 499,
    },
    {
        id: 4,
        name: 'ProductFive',
        image: 'prod4',
        desc: 'samsung',
        price: 599,
    },
];

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: [],
});

export default ProductSlice.reducer;