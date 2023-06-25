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
            username: 'benm4k',
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
        loginUser: (state) => {
            state.isLoggedIn = true;
            state.isLoggedOut = false;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.isLoggedOut = true;
        }
    }
})

export const { loginUser, logoutUser } = UsersSlice.actions;
export default UsersSlice.reducer;