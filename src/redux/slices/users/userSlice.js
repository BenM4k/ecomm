import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            name: 'Bee',
            lastName: 'Bob',
            username: 'BobLee',
            password: 'password',
        },
        {
            name: 'Mak',
            lastName: 'Moon',
            username: 'MakMoon',
            password: 'password',
        },
        {
            name: 'Sims',
            lastName: 'Zed',
            username: 'Zedsims',
            password: 'password',
        },
        {
            name: 'Ben',
            lastName: 'Ma',
            username: 'BennyMa',
            password: 'password',
        },
        {
            name: 'Mab',
            lastName: 'Ma',
            username: 'MabMa',
            password: 'password',
        },
    ],
    isLoggedIn: false,
    isLoggedOut: true,
}

const UsersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        loginUser: (state, action) => {
            state.users.forEach(user => {
                if (user.username === action.payload.username && user.password === action.payload.password) {
                    state.isLoggedIn = true;
                }
            })
        },
        logoutUser: (state) => {
            state.isLoggedOut = !state.isLoggedOut;
        }
    }
})

export const { addUser, loginUser, logoutUser } = UsersSlice.actions;
export default UsersSlice.reducer;