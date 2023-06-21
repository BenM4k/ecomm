import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            name: 'Bee',
        },
        {
            name: 'Mak',
        },
        {
            name: 'Sims',
        },
        {
            name: 'Ben',
        },
        {
            name: 'Mab',
        },
    ],
}

const UsersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: [],
})

export default UsersSlice.reducer;