import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../../Client";
import Cookies from "js-cookie";

export const getUser = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
    const query = `*[_type == 'myusers'] {
        username,
        firstname,
        lastname
    }`;
    try {
        const response = await client.fetch(query);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue('Could not fetch users');
    }
});

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
    currentUser: '',
    isLoggedIn: false,
    isLoggedOut: true,
    userInfo: Cookies.get('userInfo')
        ? JSON.parse(Cookies.get('userInfo'))
        : null,
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
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        getUserInfo: (state, action) => {
            return { ...state, userInfo: action.payload }
        }
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const { loginUser, logoutUser, setCurrentUser, getUserInfo } = UsersSlice.actions;
export default UsersSlice.reducer;