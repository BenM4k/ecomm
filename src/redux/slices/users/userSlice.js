import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { v4 as uuid } from "uuid";

const initialState = {
    users: [
        {
            id: uuid(),
            firstname: "ben",
        },
        {
            id: uuid(),
            firstname: "Jane",
        },
        {
            id: uuid(),
            firstname: "Glenn",
        },
        {
            id: uuid(),
            firstname: "Mane",
        },
        {
            id: uuid(),
            firstname: "Tjay",
        },
        {
            id: uuid(),
            firstname: "Dom",
        },
    ],
    isLoggedIn: false,
    isLoggedOut: true,
}

export const getUsers = createAsyncThunk('user/getUsers', async (_, thunkApi) => {
    const axiosPrivate = useAxiosPrivate();
    const controller = new AbortController();
    try {
        const res = await axiosPrivate.get('/users', {
            signal: controller.signal
        });
        return res.data;
    }catch (err) {
        // navigate('/sign-in', { state: { from: location }, replace: true });
        return thunkApi.rejectWithError(err);
    }
})

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
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            });
    }    
})

export const { loginUser, logoutUser, deleteUser } = UsersSlice.actions;
export default UsersSlice.reducer;