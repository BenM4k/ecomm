import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "0",
            name: 'EarBuds',
            image: '../../assets/celec.png',
            desc: 'Porta pariatur earum? Eius montes ornare adipisci proident! Laoreet taciti amet, magnam nihil saepe consectetur, molestias dis taciti esse nisi, tempore, sem commodo praesentium. Lobortis vivamus corrupti illum, sequi elit',
            price: 10,
            itemCount: 1,
        },
        {
            id: "1",
            name: 'AirPods',
            image: '../assets/celec.png',
            desc: 'Harum nemo adipisci veritatis occaecat eget interdum montes beatae debitis, fugit mauris alias nunc eget pariatur, numquam. Assumenda delectus velit pede fringilla fugit enim! Ullamco inventore per taciti. At aute, dui.',
            price: 50,
            itemCount: 1,
        },
        {
            id: "2",
            name: 'Apple Watch',
            image: '../assets/celec.png',
            desc: 'Doloribus sunt dapibus fames similique vivamus sem. Platea voluptatibus corporis similique, dicta, ipsa sapiente adipisci, tempus tortor commodi! Ligula phasellus? Nesciunt condimentum esse urna! Accusamus aut aliquam magnis. Faucibus semper, nascetur curae.',
            price: 100,
            itemCount: 1,
        },
        {
            id: "3",
            name: 'Iphone X',
            image: '../assets/celec.png',
            desc: 'Congue iusto nostrud euismod, nostra bibendum hymenaeos. Aliquid sociosqu eaque mollit? Tempora placerat curabitur ducimus. Id, massa quae. Voluptatum, augue voluptate rutrum, euismod hic, pretium mauris incidunt proin litora sapien, debitis. Viverra ligula',
            price: 499,
            itemCount: 1,
        },
        {
            id: "4",
            name: 'Samsung Note9',
            image: '../assets/celec.png',
            desc: 'Ratione, eaque nisl aliqua, error, interdum, explicabo conubia quas quod senectus eleifend vero, nec adipiscing, lectus, totam consequuntur! Donec mi voluptatibus wisi, praesent litora rutrum eleifend quae aliquet! Adipiscing nullam eget officiis, amet interdum! Erat eu. Ipsum sodales vivamus, magna.',
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
            const product = state.cart.find(product => product.id === action.payload.id);
            product.itemCount += 1;
        },
        removeCount: (state, action) => {
            const product = state.cart.find(product => product.id === action.payload.id);
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