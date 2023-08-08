import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        welcomeModal: false,
        editBannerModal: false,
        editCategoryModal: false,
    },
    reducers: {
        toggleWelcome: (state) => {
            state.welcomeModal = !state.welcomeModal;
        },
        toggleEditBanner: (state) => {
            state.editBannerModal = !state.editBannerModal;
        },
        toggleEditCategory: (state) => {
            state.editCategoryModal = !state.editCategoryModal;
        },
    },
})

export const {
    toggleWelcome,
    toggleEditBanner,
    toggleEditCategory
} = modalSlice.actions;

export default modalSlice.reducer;