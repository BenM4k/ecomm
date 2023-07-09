import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        },

    }
})

export const { loginUser, logoutUser, setCurrentUser, getUserInfo } = UsersSlice.actions;
export default UsersSlice.reducer;