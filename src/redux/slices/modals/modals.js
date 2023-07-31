import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        welcomeModal: false,
    },
    reducers: {
        toggleWelcome: (state) => {
            state.welcomeModal = !state.welcomeModal;
        }
    },
})

export const { toggleWelcome } = modalSlice.actions;

export default modalSlice.reducer;