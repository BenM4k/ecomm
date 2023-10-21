import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import apiSlice from '../../api/apiSlice';
import { v4 as uuid } from "uuid";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: (res) => {
                const users = res?.map((user) => {
                    if (!user.id) user.id = uuid();
                    return user;
                });
                return usersAdapter.setAll(initialState, users);
            },
            providesTags: (result) => [
                { type: 'user', id: 'LIST' },
                ...result?.ids?.map((id) => ({ type: 'user', id})),
            ],
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: 'DELETE',
                body: { id },
              }),
            invalidatesTags: (arg) => [
            { type: 'user', id: arg.id },
            ],
        })
    }),
});

export const {
    useDeleteUserMutation,
    useGetUsersQuery
} = usersSlice;

export const selectUsersResult = usersSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
    selectUsersResult,
    (userResult) => userResult.data,
)

export const {
    selectAll: selectAllUsers,
} = usersAdapter.getSelectors((store) => selectUsersData(store) ?? initialState )
