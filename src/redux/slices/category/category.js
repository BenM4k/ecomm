import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import apiSlice from '../../api/apiSlice';
import { v4 as uuid } from "uuid";

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState();

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories',
            transformResponse: (res) => {
                const categories = res?.map((category) => {
                    if (!category.id) category.id = uuid();
                    return category;
                });
                return categoriesAdapter.setAll(initialState, categories);
            },
            providesTags: (result) => [
                { type: 'category', id: 'LIST' },
                ...result?.ids?.map((id) => ({ type: 'category', id})),
            ],
        }),
        addCategory: builder.mutation({
            query: (category) => ({
                url: '/categories',
                method: 'POST',
                body: {
                  ...category,
                  id: uuid(),
                },
              }),
              invalidatesTags: [
                { type: 'category', id: 'LIST' },
              ],
        }),
        deleteCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
                body: { id },
              }),
            invalidatesTags: (arg) => [
            { type: 'category', id: arg.id },
            ],
        })
    }),
});

export const {
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useGetCategoriesQuery
} = categoryApiSlice;

export const selectCategoriesResult = categoryApiSlice.endpoints.getCategories.select()

const selectCategoriesData = createSelector(
    selectCategoriesResult,
    (categoryResult) => categoryResult.data,
)

export const {
    selectAll: selectAllCategories,
} = categoriesAdapter.getSelectors((store) => selectCategoriesData(store) ?? initialState )
