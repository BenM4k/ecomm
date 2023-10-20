import apislice from "../../apiSlice";

const authApiSlice = apislice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            }),
        }),
    })
});

export const {
    useLoginMutation
} = authApiSlice;