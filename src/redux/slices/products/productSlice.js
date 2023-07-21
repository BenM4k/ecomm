import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../Client";
import { v4 as uuid } from 'uuid';


export const getProducts = createAsyncThunk('products/GetProducts', async (_, thunkAPI) => {
    const query = `*[_type == 'product']`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue("Could not fetch the products.");
    }
})

const initialState = {
    products: [
        {
            _id: uuid(),
            title: "iPhone 14",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis, autem inceptos semper natoque tincidunt nemo quas doloribus aptent? Cupidatat",
            rating: "",
            comments: [],
            imageurl: "",
            price: 499.99,
            itemCount: 1,
            category: "phones",
        },
        {
            _id: uuid(),
            title: "Samsung s9",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis, autem inceptos semper natoque tincidunt nemo quas ",
            rating: "",
            comments: [],
            imageurl: "",
            price: 599.99,
            itemCount: 1,
            category: "phones",
        },
        {
            _id: uuid(),
            title: "Iphone 14",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis, autem inceptos semper natoque tincidunt nemo quas doloribus aptent",
            rating: "",
            comments: [],
            imageurl: "",
            price: 699.99,
            itemCount: 1,
            category: "phones",
        },
        {
            _id: uuid(),
            title: "Bluetooth speaker",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo",
            rating: "",
            comments: [],
            imageurl: "",
            price: 30,
            itemCount: 1,
            category: "speakers",
        },
        {
            _id: uuid(),
            title: "Samsung Note 10",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis, autem inceptos semper natoque tincidunt nemo quas doloribus aptent? Cupidatat",
            rating: "",
            comments: [],
            imageurl: "",
            price: 799.99,
            itemCount: 1,
            category: "phones",
        },
        {
            _id: uuid(),
            title: "Earbuds",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ",
            rating: "",
            comments: [],
            imageurl: "",
            price: 90,
            itemCount: 1,
            category: "earphones",
        },
        {
            _id: uuid(),
            title: "Speaker",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis, autem inceptos semper natoque tincidunt nemo",
            rating: "",
            comments: [],
            imageurl: "",
            price: 50,
            itemCount: 1,
            category: "speakers",
        },
        {
            _id: uuid(),
            title: "Samsung Speaker",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor",
            rating: "",
            comments: [],
            imageurl: "",
            price: 80,
            itemCount: 1,
            category: "speakers",
        },
        {
            _id: uuid(),
            title: "AirPods",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris,",
            rating: "",
            comments: [],
            imageurl: "",
            price: 49.99,
            itemCount: 1,
            category: "earphones",
        },
        {
            _id: uuid(),
            title: "Apple watch",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor tenetur quo iaculis",
            rating: "",
            comments: [],
            imageurl: "",
            price: 199.99,
            itemCount: 1,
            category: "watches",
        },
        {
            _id: uuid(),
            title: "Google watch",
            description: "Consequatur fames per officiis, pulvinar, ac anim ultrices voluptates! Deserunt velit quo! Imperdiet cubilia. Vero quia expedita, dictum pellentesque laboris, dolorem ultricies, curabitur rhoncus ad do? Porttitor teneturt",
            rating: "",
            comments: [],
            imageurl: "",
            price: 200,
            itemCount: 1,
            category: "watches",
        },
    ],
    error: '',
    productLoading: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        // [getProducts.pending]: (state) => {
        //     state.productLoading = true;
        // },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        },
        // [getProducts.rejected]: (state, action) => {
        //     state.error = action.payload;
        // }
    }
});

export default ProductSlice.reducer;